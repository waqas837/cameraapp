import "./globals.css";

export const metadata = {
  title: "Free Webcam Test - We Provide Your Camera Testing Tool | FreeCamTest",
  description: "Online Webcam Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
