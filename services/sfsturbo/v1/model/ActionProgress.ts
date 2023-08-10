

export class ActionProgress {
    private 'CREATING'?: string;
    public constructor() { 
    }
    public withCreating(creating: string): ActionProgress {
        this['CREATING'] = creating;
        return this;
    }
    public set creating(creating: string  | undefined) {
        this['CREATING'] = creating;
    }
    public get creating(): string | undefined {
        return this['CREATING'];
    }
}