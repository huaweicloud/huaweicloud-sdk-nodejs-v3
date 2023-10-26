

export class MigrationUpdateRequestEntity {
    private 'resume_mode'?: string;
    public constructor() { 
    }
    public withResumeMode(resumeMode: string): MigrationUpdateRequestEntity {
        this['resume_mode'] = resumeMode;
        return this;
    }
    public set resumeMode(resumeMode: string  | undefined) {
        this['resume_mode'] = resumeMode;
    }
    public get resumeMode(): string | undefined {
        return this['resume_mode'];
    }
}