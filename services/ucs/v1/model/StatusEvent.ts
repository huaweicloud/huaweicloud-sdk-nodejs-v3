

export class StatusEvent {
    public firstTimestamp?: string;
    public resourceKind?: string;
    public resourceName?: string;
    public resourceNamespace?: string;
    public message?: string;
    public constructor() { 
    }
    public withFirstTimestamp(firstTimestamp: string): StatusEvent {
        this['firstTimestamp'] = firstTimestamp;
        return this;
    }
    public withResourceKind(resourceKind: string): StatusEvent {
        this['resourceKind'] = resourceKind;
        return this;
    }
    public withResourceName(resourceName: string): StatusEvent {
        this['resourceName'] = resourceName;
        return this;
    }
    public withResourceNamespace(resourceNamespace: string): StatusEvent {
        this['resourceNamespace'] = resourceNamespace;
        return this;
    }
    public withMessage(message: string): StatusEvent {
        this['message'] = message;
        return this;
    }
}