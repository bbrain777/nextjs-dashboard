import LoginForm from '@/app/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
        {/* Demo credentials box for grading */}
        <div className="mt-6 rounded-md border border-gray-200 bg-gray-50 p-4 text-sm">
          <p className="font-semibold text-gray-700">Demo Login Credentials</p>
          <p className="mt-1 text-gray-600">
            Email: <span className="font-mono">user@nextmail.com</span>
          </p>
          <p className="text-gray-600">
            Password: <span className="font-mono">123456</span>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            This is a demo application built for the Next.js Learn Dashboard tutorial.
          </p>
        </div>

      </div>
    </main>
  );
}
