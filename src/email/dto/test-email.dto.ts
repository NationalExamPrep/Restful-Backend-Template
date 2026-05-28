import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class TestEmailDto {
  @ApiProperty({
    description: 'Recipient email address',
    example: 'test@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  to: string;

  @ApiProperty({
    description: 'Email subject line',
    example: 'Test Email from TVET App',
  })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiPropertyOptional({
    description: 'Plain text content of the email',
    example: 'This is a test email sent from the TVET application.',
  })
  @IsString()
  @IsOptional()
  text?: string;

  @ApiPropertyOptional({
    description: 'HTML content of the email',
    example: '<h1>Test Email</h1><p>This is a test email sent from the TVET application.</p>',
  })
  @IsString()
  @IsOptional()
  html?: string;
}
