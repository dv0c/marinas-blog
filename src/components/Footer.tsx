import Link from "next/link"

const Footer = () => {
    return <footer className="border-t py-6 px-3 mt-14 max-w-5xl mx-auto flex justify-between gap-5">
        <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved</p>
        <div className="text-muted-foreground text-sm flex items-center gap-5">
            <Link href={'/privacy-policy'}>Privacy Policy</Link>
            <Link href={'/privacy-policy'}>Terms and Conditions</Link>
        </div>
    </footer>
}

export default Footer