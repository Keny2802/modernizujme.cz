import clsx from "clsx";

type logoProps = {
    wrapperClassName?: string;
    imgClassName?: string
};

const Logo = ({ wrapperClassName, imgClassName }: logoProps) => {
    return (
        <div className={clsx("logo-wrapper", wrapperClassName)}>
            <img
            src="images/Logo.png"
            alt="Logo"
            loading="lazy"
            decoding="async"
            className={clsx("logo", imgClassName)} />
        </div>
    );
};

export default Logo;