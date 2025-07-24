import { ArrayNode } from './ArrayNode';
import { AuthInfo } from './AuthInfo';
import { AwParam } from './AwParam';
import { AwVariable } from './AwVariable';
import { BasicAwRes } from './BasicAwRes';
import { CheckPoint } from './CheckPoint';
import { ErrorInfo } from './ErrorInfo';
import { ExtraInfo } from './ExtraInfo';


export class AwInstanceRes {
    private 'alias_runaw'?: string;
    private 'authentication_info'?: AuthInfo;
    private 'authentication_type'?: string;
    private 'aw_description'?: string;
    private 'aw_id'?: string;
    private 'aw_type'?: number;
    private 'basic_aw'?: BasicAwRes;
    private 'body_param_type'?: string;
    private 'by_order'?: number;
    public changeSign?: number;
    private 'check_point_list'?: Array<CheckPoint>;
    public children?: Array<AwInstanceRes>;
    private 'condition_statement'?: string;
    private 'condition_type'?: number;
    private 'create_time'?: string;
    private 'create_time_stamp'?: number;
    private 'create_time_string'?: string;
    private 'create_user'?: string;
    private 'custom_header'?: Array<AwParam>;
    public description?: string;
    private 'error_info'?: ErrorInfo;
    private 'extra_info'?: ExtraInfo;
    private 'from_outside'?: number;
    public hasLevel?: number;
    private 'header_array'?: Array<ArrayNode>;
    private 'his_script'?: string;
    public id?: string;
    private 'is_basic'?: number;
    private 'is_contract_aw'?: number;
    private 'is_disabled'?: number;
    private 'is_sectest_aw'?: number;
    public level?: number;
    public name?: string;
    private 'param_dependent'?: string;
    private 'param_dependent_enabled'?: number;
    private 'param_type_and_value'?: Array<AwParam>;
    public projectId?: string;
    public region?: string;
    public relation?: string;
    private 'relation_id'?: string;
    private 'relation_type'?: number;
    private 'retry_interval'?: string;
    private 'retry_times'?: string;
    public scriptName?: string;
    private 'service_and_stage'?: string;
    private 'special_type'?: number;
    private 'update_time'?: string;
    private 'update_time_stamp'?: number;
    private 'update_time_string'?: string;
    private 'update_user'?: string;
    private 'user_id'?: string;
    private 'variable_list'?: Array<AwVariable>;
    public constructor() { 
    }
    public withAliasRunaw(aliasRunaw: string): AwInstanceRes {
        this['alias_runaw'] = aliasRunaw;
        return this;
    }
    public set aliasRunaw(aliasRunaw: string  | undefined) {
        this['alias_runaw'] = aliasRunaw;
    }
    public get aliasRunaw(): string | undefined {
        return this['alias_runaw'];
    }
    public withAuthenticationInfo(authenticationInfo: AuthInfo): AwInstanceRes {
        this['authentication_info'] = authenticationInfo;
        return this;
    }
    public set authenticationInfo(authenticationInfo: AuthInfo  | undefined) {
        this['authentication_info'] = authenticationInfo;
    }
    public get authenticationInfo(): AuthInfo | undefined {
        return this['authentication_info'];
    }
    public withAuthenticationType(authenticationType: string): AwInstanceRes {
        this['authentication_type'] = authenticationType;
        return this;
    }
    public set authenticationType(authenticationType: string  | undefined) {
        this['authentication_type'] = authenticationType;
    }
    public get authenticationType(): string | undefined {
        return this['authentication_type'];
    }
    public withAwDescription(awDescription: string): AwInstanceRes {
        this['aw_description'] = awDescription;
        return this;
    }
    public set awDescription(awDescription: string  | undefined) {
        this['aw_description'] = awDescription;
    }
    public get awDescription(): string | undefined {
        return this['aw_description'];
    }
    public withAwId(awId: string): AwInstanceRes {
        this['aw_id'] = awId;
        return this;
    }
    public set awId(awId: string  | undefined) {
        this['aw_id'] = awId;
    }
    public get awId(): string | undefined {
        return this['aw_id'];
    }
    public withAwType(awType: number): AwInstanceRes {
        this['aw_type'] = awType;
        return this;
    }
    public set awType(awType: number  | undefined) {
        this['aw_type'] = awType;
    }
    public get awType(): number | undefined {
        return this['aw_type'];
    }
    public withBasicAw(basicAw: BasicAwRes): AwInstanceRes {
        this['basic_aw'] = basicAw;
        return this;
    }
    public set basicAw(basicAw: BasicAwRes  | undefined) {
        this['basic_aw'] = basicAw;
    }
    public get basicAw(): BasicAwRes | undefined {
        return this['basic_aw'];
    }
    public withBodyParamType(bodyParamType: string): AwInstanceRes {
        this['body_param_type'] = bodyParamType;
        return this;
    }
    public set bodyParamType(bodyParamType: string  | undefined) {
        this['body_param_type'] = bodyParamType;
    }
    public get bodyParamType(): string | undefined {
        return this['body_param_type'];
    }
    public withByOrder(byOrder: number): AwInstanceRes {
        this['by_order'] = byOrder;
        return this;
    }
    public set byOrder(byOrder: number  | undefined) {
        this['by_order'] = byOrder;
    }
    public get byOrder(): number | undefined {
        return this['by_order'];
    }
    public withChangeSign(changeSign: number): AwInstanceRes {
        this['changeSign'] = changeSign;
        return this;
    }
    public withCheckPointList(checkPointList: Array<CheckPoint>): AwInstanceRes {
        this['check_point_list'] = checkPointList;
        return this;
    }
    public set checkPointList(checkPointList: Array<CheckPoint>  | undefined) {
        this['check_point_list'] = checkPointList;
    }
    public get checkPointList(): Array<CheckPoint> | undefined {
        return this['check_point_list'];
    }
    public withChildren(children: Array<AwInstanceRes>): AwInstanceRes {
        this['children'] = children;
        return this;
    }
    public withConditionStatement(conditionStatement: string): AwInstanceRes {
        this['condition_statement'] = conditionStatement;
        return this;
    }
    public set conditionStatement(conditionStatement: string  | undefined) {
        this['condition_statement'] = conditionStatement;
    }
    public get conditionStatement(): string | undefined {
        return this['condition_statement'];
    }
    public withConditionType(conditionType: number): AwInstanceRes {
        this['condition_type'] = conditionType;
        return this;
    }
    public set conditionType(conditionType: number  | undefined) {
        this['condition_type'] = conditionType;
    }
    public get conditionType(): number | undefined {
        return this['condition_type'];
    }
    public withCreateTime(createTime: string): AwInstanceRes {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateTimeStamp(createTimeStamp: number): AwInstanceRes {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withCreateTimeString(createTimeString: string): AwInstanceRes {
        this['create_time_string'] = createTimeString;
        return this;
    }
    public set createTimeString(createTimeString: string  | undefined) {
        this['create_time_string'] = createTimeString;
    }
    public get createTimeString(): string | undefined {
        return this['create_time_string'];
    }
    public withCreateUser(createUser: string): AwInstanceRes {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCustomHeader(customHeader: Array<AwParam>): AwInstanceRes {
        this['custom_header'] = customHeader;
        return this;
    }
    public set customHeader(customHeader: Array<AwParam>  | undefined) {
        this['custom_header'] = customHeader;
    }
    public get customHeader(): Array<AwParam> | undefined {
        return this['custom_header'];
    }
    public withDescription(description: string): AwInstanceRes {
        this['description'] = description;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorInfo): AwInstanceRes {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorInfo  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorInfo | undefined {
        return this['error_info'];
    }
    public withExtraInfo(extraInfo: ExtraInfo): AwInstanceRes {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: ExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): ExtraInfo | undefined {
        return this['extra_info'];
    }
    public withFromOutside(fromOutside: number): AwInstanceRes {
        this['from_outside'] = fromOutside;
        return this;
    }
    public set fromOutside(fromOutside: number  | undefined) {
        this['from_outside'] = fromOutside;
    }
    public get fromOutside(): number | undefined {
        return this['from_outside'];
    }
    public withHasLevel(hasLevel: number): AwInstanceRes {
        this['hasLevel'] = hasLevel;
        return this;
    }
    public withHeaderArray(headerArray: Array<ArrayNode>): AwInstanceRes {
        this['header_array'] = headerArray;
        return this;
    }
    public set headerArray(headerArray: Array<ArrayNode>  | undefined) {
        this['header_array'] = headerArray;
    }
    public get headerArray(): Array<ArrayNode> | undefined {
        return this['header_array'];
    }
    public withHisScript(hisScript: string): AwInstanceRes {
        this['his_script'] = hisScript;
        return this;
    }
    public set hisScript(hisScript: string  | undefined) {
        this['his_script'] = hisScript;
    }
    public get hisScript(): string | undefined {
        return this['his_script'];
    }
    public withId(id: string): AwInstanceRes {
        this['id'] = id;
        return this;
    }
    public withIsBasic(isBasic: number): AwInstanceRes {
        this['is_basic'] = isBasic;
        return this;
    }
    public set isBasic(isBasic: number  | undefined) {
        this['is_basic'] = isBasic;
    }
    public get isBasic(): number | undefined {
        return this['is_basic'];
    }
    public withIsContractAw(isContractAw: number): AwInstanceRes {
        this['is_contract_aw'] = isContractAw;
        return this;
    }
    public set isContractAw(isContractAw: number  | undefined) {
        this['is_contract_aw'] = isContractAw;
    }
    public get isContractAw(): number | undefined {
        return this['is_contract_aw'];
    }
    public withIsDisabled(isDisabled: number): AwInstanceRes {
        this['is_disabled'] = isDisabled;
        return this;
    }
    public set isDisabled(isDisabled: number  | undefined) {
        this['is_disabled'] = isDisabled;
    }
    public get isDisabled(): number | undefined {
        return this['is_disabled'];
    }
    public withIsSectestAw(isSectestAw: number): AwInstanceRes {
        this['is_sectest_aw'] = isSectestAw;
        return this;
    }
    public set isSectestAw(isSectestAw: number  | undefined) {
        this['is_sectest_aw'] = isSectestAw;
    }
    public get isSectestAw(): number | undefined {
        return this['is_sectest_aw'];
    }
    public withLevel(level: number): AwInstanceRes {
        this['level'] = level;
        return this;
    }
    public withName(name: string): AwInstanceRes {
        this['name'] = name;
        return this;
    }
    public withParamDependent(paramDependent: string): AwInstanceRes {
        this['param_dependent'] = paramDependent;
        return this;
    }
    public set paramDependent(paramDependent: string  | undefined) {
        this['param_dependent'] = paramDependent;
    }
    public get paramDependent(): string | undefined {
        return this['param_dependent'];
    }
    public withParamDependentEnabled(paramDependentEnabled: number): AwInstanceRes {
        this['param_dependent_enabled'] = paramDependentEnabled;
        return this;
    }
    public set paramDependentEnabled(paramDependentEnabled: number  | undefined) {
        this['param_dependent_enabled'] = paramDependentEnabled;
    }
    public get paramDependentEnabled(): number | undefined {
        return this['param_dependent_enabled'];
    }
    public withParamTypeAndValue(paramTypeAndValue: Array<AwParam>): AwInstanceRes {
        this['param_type_and_value'] = paramTypeAndValue;
        return this;
    }
    public set paramTypeAndValue(paramTypeAndValue: Array<AwParam>  | undefined) {
        this['param_type_and_value'] = paramTypeAndValue;
    }
    public get paramTypeAndValue(): Array<AwParam> | undefined {
        return this['param_type_and_value'];
    }
    public withProjectId(projectId: string): AwInstanceRes {
        this['projectId'] = projectId;
        return this;
    }
    public withRegion(region: string): AwInstanceRes {
        this['region'] = region;
        return this;
    }
    public withRelation(relation: string): AwInstanceRes {
        this['relation'] = relation;
        return this;
    }
    public withRelationId(relationId: string): AwInstanceRes {
        this['relation_id'] = relationId;
        return this;
    }
    public set relationId(relationId: string  | undefined) {
        this['relation_id'] = relationId;
    }
    public get relationId(): string | undefined {
        return this['relation_id'];
    }
    public withRelationType(relationType: number): AwInstanceRes {
        this['relation_type'] = relationType;
        return this;
    }
    public set relationType(relationType: number  | undefined) {
        this['relation_type'] = relationType;
    }
    public get relationType(): number | undefined {
        return this['relation_type'];
    }
    public withRetryInterval(retryInterval: string): AwInstanceRes {
        this['retry_interval'] = retryInterval;
        return this;
    }
    public set retryInterval(retryInterval: string  | undefined) {
        this['retry_interval'] = retryInterval;
    }
    public get retryInterval(): string | undefined {
        return this['retry_interval'];
    }
    public withRetryTimes(retryTimes: string): AwInstanceRes {
        this['retry_times'] = retryTimes;
        return this;
    }
    public set retryTimes(retryTimes: string  | undefined) {
        this['retry_times'] = retryTimes;
    }
    public get retryTimes(): string | undefined {
        return this['retry_times'];
    }
    public withScriptName(scriptName: string): AwInstanceRes {
        this['scriptName'] = scriptName;
        return this;
    }
    public withServiceAndStage(serviceAndStage: string): AwInstanceRes {
        this['service_and_stage'] = serviceAndStage;
        return this;
    }
    public set serviceAndStage(serviceAndStage: string  | undefined) {
        this['service_and_stage'] = serviceAndStage;
    }
    public get serviceAndStage(): string | undefined {
        return this['service_and_stage'];
    }
    public withSpecialType(specialType: number): AwInstanceRes {
        this['special_type'] = specialType;
        return this;
    }
    public set specialType(specialType: number  | undefined) {
        this['special_type'] = specialType;
    }
    public get specialType(): number | undefined {
        return this['special_type'];
    }
    public withUpdateTime(updateTime: string): AwInstanceRes {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): AwInstanceRes {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
    public withUpdateTimeString(updateTimeString: string): AwInstanceRes {
        this['update_time_string'] = updateTimeString;
        return this;
    }
    public set updateTimeString(updateTimeString: string  | undefined) {
        this['update_time_string'] = updateTimeString;
    }
    public get updateTimeString(): string | undefined {
        return this['update_time_string'];
    }
    public withUpdateUser(updateUser: string): AwInstanceRes {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withUserId(userId: string): AwInstanceRes {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withVariableList(variableList: Array<AwVariable>): AwInstanceRes {
        this['variable_list'] = variableList;
        return this;
    }
    public set variableList(variableList: Array<AwVariable>  | undefined) {
        this['variable_list'] = variableList;
    }
    public get variableList(): Array<AwVariable> | undefined {
        return this['variable_list'];
    }
}