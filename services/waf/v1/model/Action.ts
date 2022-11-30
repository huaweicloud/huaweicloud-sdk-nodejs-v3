

export class Action {
    public category?: string;
    public constructor() { 
    }
    public withCategory(category: string): Action {
        this['category'] = category;
        return this;
    }
}