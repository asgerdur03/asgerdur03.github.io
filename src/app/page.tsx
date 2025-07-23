import Image from "next/image";

export default function Home() {
  return (
    <div>      
      <p> blalbalbal, ferilskrá og liknar að verkefnum eða ehv</p>
      
        <ul>
        <li>1. pokemon pomodoro niðurteljara thing (credit til villu)</li>
        <li>2. 2048 leikur (mabey)</li>
        <li>3. gömul verkefni</li>
        <li>4. Svona skill yfirlit, kannski ferilskrá-ish</li>
        </ul>
      
      <p>todo: nota project component til að linka verkefni, copm ætti að taka þessi attributes sem props</p>
      
      <Image src="/image.png" alt="inspo pic" width={250} height={150}/>
    </div>
  );
}
