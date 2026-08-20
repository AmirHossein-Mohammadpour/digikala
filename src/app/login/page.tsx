import Image from "next/image";
import logo from '@/assets/images/login/logo.svg';
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className={`h-screen w-screen flex justify-center items-center`}>
      <div className={`border py-10 px-6 border-neutral-400 rounded-lg flex flex-col items-center gap-10 text-xs justify-between`}>
        <Link href={`/`}><Image src={logo} alt={`دیجی کالا`} className={`w-50 h-auto`}/></Link>
        <div className={`flex flex-col gap-6`}>
          <h1 className={`font-bold text-xl`}>ورود | ثبت‌نام</h1>
          <div className={`flex flex-col gap-2`}>
            <p>سلام!</p>
            <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
          </div>
          <div className={`flex flex-col gap-1`}>
            <input type="text" className={`border outline-none p-3 text-base rounded-lg border-neutral-400 text`}/>
            <p className={`text-primary`}>لطفا این قسمت را خالی نگذارید</p>
          </div>
          <button className={`bg-primary text-white p-3 text-base font-bold rounded-lg`}>ورود</button>
          <p className={``}>ورود شما به معنای پذیرش <Link href={`#`} className={`text-blue-500`}>شرایط دیجی‌کالا</Link> و <Link href={`#`} className={`text-blue-500`}>قوانین حریم‌خصوصی</Link> است.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;