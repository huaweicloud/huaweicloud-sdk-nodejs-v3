import { OrderRuleAclDto } from './OrderRuleAclDto';


export class ListRuleAclUsingPutRequest {
    private 'project_id': string | undefined;
    private 'acl_rule_id': string | undefined;
    public body?: OrderRuleAclDto;
    public constructor(projectId?: any, aclRuleId?: any) { 
        this['project_id'] = projectId;
        this['acl_rule_id'] = aclRuleId;
    }
    public withProjectId(projectId: string): ListRuleAclUsingPutRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withAclRuleId(aclRuleId: string): ListRuleAclUsingPutRequest {
        this['acl_rule_id'] = aclRuleId;
        return this;
    }
    public set aclRuleId(aclRuleId: string | undefined) {
        this['acl_rule_id'] = aclRuleId;
    }
    public get aclRuleId() {
        return this['acl_rule_id'];
    }
    public withBody(body: OrderRuleAclDto): ListRuleAclUsingPutRequest {
        this['body'] = body;
        return this;
    }
}