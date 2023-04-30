import Link from "next/link"

interface Props {
  title: string
  link: string
  out?: boolean
  underline?: boolean
};

function SmallLink(props: Props) {
  const class_name = "hover:text-blue-600 hover:dark:text-blue-600" + (props.underline ? " underline" : "");
  return (
    props.out ? <Link href={props.link} target="_blank" className={class_name}>{props.title}{" "}<span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span></Link> :
    <Link href={props.link} target="_blank" className={class_name}>{props.title}</Link>
  );
}

SmallLink.defaultProps = {
  out: false,
  underline: false
};

export default SmallLink;
