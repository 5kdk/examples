import type { PropsWithChildren } from "react";
import { Card } from "antd"; // ~ "shared/ui/card"
import { Link } from "react-router-dom";

export type TaskCardProps = PropsWithChildren<{
    data: import("shared/api").Task;
    titleHref?: string;
}> & import("antd").CardProps;

export const TaskCard = ({ data, titleHref, children, ...cardProps }: TaskCardProps) => {
    const title = titleHref ? <Link to={titleHref}>{data.title}</Link> : data.title

    return (
        <Card
            title={title}
            {...cardProps}
        >
            {children}
        </Card>
    );
};
