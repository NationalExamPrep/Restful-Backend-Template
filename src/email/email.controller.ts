import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { TestEmailDto } from './dto/test-email.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { UserRole } from '@prisma/client';

@ApiTags('email')
@ApiBearerAuth('JWT-auth')
@Controller('email')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('test')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ 
    summary: 'Send a test email (Admin only)',
    description: '🔒 Protected endpoint - Requires JWT authentication and ADMIN role. Send a test email to verify SMTP configuration.',
  })
  @ApiResponse({
    status: 201,
    description: 'Test email sent successfully',
    schema: {
      example: {
        success: true,
        message: 'Test email sent successfully',
        recipient: 'test@example.com',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or missing JWT token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - Admin role required',
  })
  @ApiResponse({
    status: 500,
    description: 'Failed to send test email',
    schema: {
      example: {
        success: false,
        message: 'Failed to send test email',
        error: 'SMTP connection failed',
      },
    },
  })
  async testEmail(@Body() testEmailDto: TestEmailDto) {
    try {
      await this.emailService.sendEmail({
        to: testEmailDto.to,
        subject: testEmailDto.subject,
        text: testEmailDto.text,
        html: testEmailDto.html,
      });

      return {
        success: true,
        message: 'Test email sent successfully',
        recipient: testEmailDto.to,
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to send test email',
        error: error.message,
      };
    }
  }
}
