import clsx from 'clsx';
import classes from './ContentCard.module.scss';

type ContentCardProps = {
    children: React.ReactNode;
    className?: string;
};

function ContentCard({ children, className}: ContentCardProps) {
            console.log(className);
    return (
        <div className={clsx('border', classes.contentCard, className)}>
            {children}
        </div>
    );
};

export default ContentCard