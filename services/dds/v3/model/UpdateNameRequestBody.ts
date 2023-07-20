

export class UpdateNameRequestBody {
    private 'new_instance_name'?: string;
    public constructor(newInstanceName?: string) { 
        this['new_instance_name'] = newInstanceName;
    }
    public withNewInstanceName(newInstanceName: string): UpdateNameRequestBody {
        this['new_instance_name'] = newInstanceName;
        return this;
    }
    public set newInstanceName(newInstanceName: string  | undefined) {
        this['new_instance_name'] = newInstanceName;
    }
    public get newInstanceName(): string | undefined {
        return this['new_instance_name'];
    }
}