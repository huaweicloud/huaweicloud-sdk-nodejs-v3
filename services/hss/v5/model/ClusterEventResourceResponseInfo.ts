

export class ClusterEventResourceResponseInfo {
    private 'enforcement_action'?: string;
    public group?: string;
    public message?: string;
    public name?: string;
    public namespace?: string;
    public version?: string;
    public kind?: string;
    private 'resource_name'?: string;
    public constructor() { 
    }
    public withEnforcementAction(enforcementAction: string): ClusterEventResourceResponseInfo {
        this['enforcement_action'] = enforcementAction;
        return this;
    }
    public set enforcementAction(enforcementAction: string  | undefined) {
        this['enforcement_action'] = enforcementAction;
    }
    public get enforcementAction(): string | undefined {
        return this['enforcement_action'];
    }
    public withGroup(group: string): ClusterEventResourceResponseInfo {
        this['group'] = group;
        return this;
    }
    public withMessage(message: string): ClusterEventResourceResponseInfo {
        this['message'] = message;
        return this;
    }
    public withName(name: string): ClusterEventResourceResponseInfo {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ClusterEventResourceResponseInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withVersion(version: string): ClusterEventResourceResponseInfo {
        this['version'] = version;
        return this;
    }
    public withKind(kind: string): ClusterEventResourceResponseInfo {
        this['kind'] = kind;
        return this;
    }
    public withResourceName(resourceName: string): ClusterEventResourceResponseInfo {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}