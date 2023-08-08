export interface IQuest {
    title: string;
    slug: string;
    active: boolean;
    image: string;
    description: string;
    place?: string;
    scoring: string;
    duration: string;
}
