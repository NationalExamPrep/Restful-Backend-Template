import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Hash password for demo users
  const hashedPassword = await bcrypt.hash('Admin123!', 10);
  const hashedUserPassword = await bcrypt.hash('User123!', 10);

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: UserRole.ADMIN,
    },
  });

  console.log('✅ Created admin user:', admin.email);

  // Create attendant user
  const attendant = await prisma.user.upsert({
    where: { email: 'attendant@example.com' },
    update: {},
    create: {
      email: 'attendant@example.com',
      password: hashedUserPassword,
      firstName: 'John',
      lastName: 'Attendant',
      role: UserRole.ATTENDANT,
    },
  });

  console.log('✅ Created attendant user:', attendant.email);

  // Create regular user
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: hashedUserPassword,
      firstName: 'Jane',
      lastName: 'Doe',
      role: UserRole.USER,
    },
  });

  console.log('✅ Created regular user:', user.email);

  // Add your exam-specific seed data here

  console.log('\n🎉 Seeding completed successfully!');
  console.log('\n📝 Demo Credentials:');
  console.log('   Admin: admin@example.com / Admin123!');
  console.log('   Attendant: attendant@example.com / User123!');
  console.log('   User: user@example.com / User123!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
