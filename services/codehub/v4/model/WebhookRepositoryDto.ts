

export class WebhookRepositoryDto {
    public id?: number;
    public namespace?: string;
    public constructor() { 
    }
    public withId(id: number): WebhookRepositoryDto {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): WebhookRepositoryDto {
        this['namespace'] = namespace;
        return this;
    }
}