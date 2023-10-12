import { TrafficMirrorFilterRule } from './TrafficMirrorFilterRule';


export class TrafficMirrorFilter {
    public id?: string;
    private 'project_id'?: string;
    public description?: string;
    public name?: string;
    private 'ingress_rules'?: Array<TrafficMirrorFilterRule>;
    private 'egress_rules'?: Array<TrafficMirrorFilterRule>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, projectId?: string, description?: string, name?: string, ingressRules?: Array<TrafficMirrorFilterRule>, egressRules?: Array<TrafficMirrorFilterRule>, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['description'] = description;
        this['name'] = name;
        this['ingress_rules'] = ingressRules;
        this['egress_rules'] = egressRules;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): TrafficMirrorFilter {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): TrafficMirrorFilter {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): TrafficMirrorFilter {
        this['description'] = description;
        return this;
    }
    public withName(name: string): TrafficMirrorFilter {
        this['name'] = name;
        return this;
    }
    public withIngressRules(ingressRules: Array<TrafficMirrorFilterRule>): TrafficMirrorFilter {
        this['ingress_rules'] = ingressRules;
        return this;
    }
    public set ingressRules(ingressRules: Array<TrafficMirrorFilterRule>  | undefined) {
        this['ingress_rules'] = ingressRules;
    }
    public get ingressRules(): Array<TrafficMirrorFilterRule> | undefined {
        return this['ingress_rules'];
    }
    public withEgressRules(egressRules: Array<TrafficMirrorFilterRule>): TrafficMirrorFilter {
        this['egress_rules'] = egressRules;
        return this;
    }
    public set egressRules(egressRules: Array<TrafficMirrorFilterRule>  | undefined) {
        this['egress_rules'] = egressRules;
    }
    public get egressRules(): Array<TrafficMirrorFilterRule> | undefined {
        return this['egress_rules'];
    }
    public withCreatedAt(createdAt: Date): TrafficMirrorFilter {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): TrafficMirrorFilter {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}