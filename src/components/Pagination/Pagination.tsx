import { ButtonHTMLAttributes } from "react";

interface Propss extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    handleClick?: () => void;
    bgColor?: string;
    prefixIcon?: JSX.Element;
    margin?: string;
}

export const PrimaryButton: React.FC<Propss> = ({
    text,
    handleClick,
    bgColor = "var(--green)",
    prefixIcon,
    margin,
    ...rest
}) => {
    return (
        <button
            onClick={handleClick}
            style={{
                height: "max-content",
                padding: "6px 16px",
                border: "1px solid var(--black)",
                borderRadius: "8px",
                color: "var(--green)",
                backgroundColor: bgColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: margin,
                fontWeight: "600",
            }}
            {...rest}
        >
            {prefixIcon && (
                <div style={{ marginRight: "8px" }}>{prefixIcon}</div>
            )}
            <span>{text}</span>
        </button>
    );
};	

type Props = {
    handlePreviousClick?: () => void;
    handleNextClick?: () => void;
    currentPage: number;
    totalPages: number;
    margin?: string;
};

const Pagination = (props: Props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                margin: props.margin ? props.margin : "0",
            }}
        >
            <PrimaryButton
                text="Previous"
                handleClick={
                    props.currentPage > 1 ? props.handlePreviousClick : () => {}
                }
                bgColor={
                    props.currentPage > 1 ? "rgba(1, 75, 178, .1)" : "white"
                }
            />
            <p
                style={{
                    color: "var(--black)",
                }}
            >
                Page <strong>{props.currentPage}</strong> of{" "}
                <strong>{props.totalPages}</strong>
            </p>
            <PrimaryButton
                text="Next"
                handleClick={
                    props.currentPage < props.totalPages
                        ? props.handleNextClick
                        : () => {}
                }
                bgColor={
                    props.currentPage < props.totalPages
                        ? "rgba(1, 75, 178, .1)"
                        : "white"
                }
            />
        </div>
    );
};

export default Pagination;
