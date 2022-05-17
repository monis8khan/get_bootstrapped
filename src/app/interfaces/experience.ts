
export interface Experience {
    company: string;
    duration?: string;
    description?: string;
    location: string;
    type: string;
    job: Job[];
    dur? :string;
    logo?: string;
    desigCard?: boolean;
}

export interface Job {
    designation: string;
    startDate: Date;
    endDate?: Date;
    dur?: string;
}