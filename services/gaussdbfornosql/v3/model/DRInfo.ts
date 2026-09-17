

export class DRInfo {
    private 'source_instance_id'?: string;
    public constructor() { 
    }
    public withSourceInstanceId(sourceInstanceId: string): DRInfo {
        this['source_instance_id'] = sourceInstanceId;
        return this;
    }
    public set sourceInstanceId(sourceInstanceId: string  | undefined) {
        this['source_instance_id'] = sourceInstanceId;
    }
    public get sourceInstanceId(): string | undefined {
        return this['source_instance_id'];
    }
}