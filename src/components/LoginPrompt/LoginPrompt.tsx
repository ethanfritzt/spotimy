import clsx from "clsx";
import React from "react";
import ContentCard from "../ContentCard";

type LoginPromptProps = {
    className?: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
};

function LoginPrompt(props: LoginPromptProps) {

    return (
        <ContentCard className={clsx(props.className, 'text-center')}>
            <div className="flex-column h-100">
                <div>
                    <h1>{props.title}</h1>
                    <h2>{props.description}</h2>
                </div>
                <div style={{ height: 225 }}>
                    {/** Spacer */}
                </div>
                <div className="m-auto">
                    <a href={props.href} className="btn btn-primary">{props.buttonText}</a>
                </div>
            </div>
        </ContentCard>
    );
};

export default LoginPrompt;
