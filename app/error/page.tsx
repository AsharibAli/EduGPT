'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function ErrorPage() {
    const router = useRouter()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold text-black">Authentication Error</h1>
                <p className="mb-8 text-lg text-gray-600">
                    An error occurred while authenticating with OCID. Please try again.
                </p>
                <Button
                    onClick={() => router.push('/')}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                    Return to Login
                </Button>
            </div>
        </div>
    )
}