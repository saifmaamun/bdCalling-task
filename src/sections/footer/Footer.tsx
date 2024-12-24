import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="bg-black mt-20">
      <div className="px-16">
        <FooterTop />

        <div className=" pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; 2022 - {new Date().getFullYear()} | Alrights reserved by
            Wealcoder
          </p>
        </div>
      </div>
    </footer>
  );
}
