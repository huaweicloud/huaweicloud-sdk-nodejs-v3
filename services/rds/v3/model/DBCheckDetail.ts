import { DetectedProblem } from './DetectedProblem';


export class DBCheckDetail {
    private 'documentation_link'?: string;
    public description?: string;
    public id?: string;
    public title?: string;
    public status?: string;
    private 'detected_problems'?: Array<DetectedProblem>;
    public constructor() { 
    }
    public withDocumentationLink(documentationLink: string): DBCheckDetail {
        this['documentation_link'] = documentationLink;
        return this;
    }
    public set documentationLink(documentationLink: string  | undefined) {
        this['documentation_link'] = documentationLink;
    }
    public get documentationLink(): string | undefined {
        return this['documentation_link'];
    }
    public withDescription(description: string): DBCheckDetail {
        this['description'] = description;
        return this;
    }
    public withId(id: string): DBCheckDetail {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): DBCheckDetail {
        this['title'] = title;
        return this;
    }
    public withStatus(status: string): DBCheckDetail {
        this['status'] = status;
        return this;
    }
    public withDetectedProblems(detectedProblems: Array<DetectedProblem>): DBCheckDetail {
        this['detected_problems'] = detectedProblems;
        return this;
    }
    public set detectedProblems(detectedProblems: Array<DetectedProblem>  | undefined) {
        this['detected_problems'] = detectedProblems;
    }
    public get detectedProblems(): Array<DetectedProblem> | undefined {
        return this['detected_problems'];
    }
}