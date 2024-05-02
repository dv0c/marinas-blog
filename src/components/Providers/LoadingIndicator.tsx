'use client'
import Next13ProgressBar from 'next13-progressbar'
import { FC } from 'react'

interface LoadingIndicatorProps {
    children: React.ReactNode
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ children }) => {
    return <>
        {children}
        <Next13ProgressBar height="3px" color="#0A2FFF" options={{ showSpinner: false }} showOnShallow />
    </>
}

export default LoadingIndicator