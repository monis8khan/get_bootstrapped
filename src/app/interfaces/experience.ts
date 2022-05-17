export interface Experience {
    company: string;
    duration?: string;
    description?: string;
    location: string;
    type: string;
    job: Job[];
}

interface Job {
    designation: string;
    startDate: Date;
    endDate?: Date;
}