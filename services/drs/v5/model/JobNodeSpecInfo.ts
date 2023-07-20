

export class JobNodeSpecInfo {
    private 'node_type'?: JobNodeSpecInfoNodeTypeEnum | string;
    public constructor(nodeType?: string) { 
        this['node_type'] = nodeType;
    }
    public withNodeType(nodeType: JobNodeSpecInfoNodeTypeEnum | string): JobNodeSpecInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: JobNodeSpecInfoNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): JobNodeSpecInfoNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobNodeSpecInfoNodeTypeEnum {
    MICRO = 'micro',
    SMALL = 'small',
    MEDIUM = 'medium',
    HIGH = 'high'
}
