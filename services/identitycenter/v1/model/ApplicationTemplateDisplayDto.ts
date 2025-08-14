import { DisplayDto } from './DisplayDto';


export class ApplicationTemplateDisplayDto {
    private 'application_id'?: string;
    public display?: DisplayDto;
    private 'application_type'?: string;
    public constructor(applicationId?: string, display?: DisplayDto) { 
        this['application_id'] = applicationId;
        this['display'] = display;
    }
    public withApplicationId(applicationId: string): ApplicationTemplateDisplayDto {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withDisplay(display: DisplayDto): ApplicationTemplateDisplayDto {
        this['display'] = display;
        return this;
    }
    public withApplicationType(applicationType: string): ApplicationTemplateDisplayDto {
        this['application_type'] = applicationType;
        return this;
    }
    public set applicationType(applicationType: string  | undefined) {
        this['application_type'] = applicationType;
    }
    public get applicationType(): string | undefined {
        return this['application_type'];
    }
}