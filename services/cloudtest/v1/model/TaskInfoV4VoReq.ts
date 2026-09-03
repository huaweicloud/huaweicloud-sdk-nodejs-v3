import { BuildProduct } from './BuildProduct';
import { CloudTestSuiteBasicInfo } from './CloudTestSuiteBasicInfo';
import { ExecuteStrategiesVo } from './ExecuteStrategiesVo';
import { IpGroup } from './IpGroup';
import { PreTestCaseInfo } from './PreTestCaseInfo';
import { ResourcePool } from './ResourcePool';
import { TaskExtParam } from './TaskExtParam';
import { TestCaseBasicInfo } from './TestCaseBasicInfo';


export class TaskInfoV4VoReq {
    private 'alert_action'?: string;
    private 'alert_config'?: object;
    private 'build_products'?: Array<BuildProduct>;
    private 'case_package_env_name'?: string;
    private 'case_package_id'?: string;
    private 'case_package_name'?: string;
    private 'case_total'?: number;
    private 'client_type'?: string;
    private 'cloudTestSuite_basicInfo'?: CloudTestSuiteBasicInfo;
    public comments?: string;
    private 'create_time'?: Date;
    private 'create_user'?: string;
    private 'env_type'?: number;
    private 'environment_group_id'?: string;
    private 'execute_strategies'?: ExecuteStrategiesVo;
    private 'executor_type'?: string;
    private 'ext_params'?: Array<TaskExtParam>;
    public favorite?: string;
    public id?: string;
    public ipGroup?: IpGroup;
    public ipKey?: string;
    public isDebugTask?: number;
    public label?: string;
    public labelName?: string;
    public labelType?: string;
    public lastStopTime?: number;
    private 'location_ids'?: Array<string>;
    public name?: string;
    public planId?: string;
    public preTestCaseInfo?: PreTestCaseInfo;
    public resourcePool?: ResourcePool;
    public state?: number;
    private 'subtask_id'?: string;
    public subtaskTotal?: number;
    public taskTypeId?: string;
    public testCases?: Array<TestCaseBasicInfo>;
    private 'test_service_id'?: string;
    public testSuiteType?: number;
    public tip?: string;
    private 'update_time'?: Date;
    private 'update_user'?: string;
    public version?: string;
    public constructor() { 
    }
    public withAlertAction(alertAction: string): TaskInfoV4VoReq {
        this['alert_action'] = alertAction;
        return this;
    }
    public set alertAction(alertAction: string  | undefined) {
        this['alert_action'] = alertAction;
    }
    public get alertAction(): string | undefined {
        return this['alert_action'];
    }
    public withAlertConfig(alertConfig: object): TaskInfoV4VoReq {
        this['alert_config'] = alertConfig;
        return this;
    }
    public set alertConfig(alertConfig: object  | undefined) {
        this['alert_config'] = alertConfig;
    }
    public get alertConfig(): object | undefined {
        return this['alert_config'];
    }
    public withBuildProducts(buildProducts: Array<BuildProduct>): TaskInfoV4VoReq {
        this['build_products'] = buildProducts;
        return this;
    }
    public set buildProducts(buildProducts: Array<BuildProduct>  | undefined) {
        this['build_products'] = buildProducts;
    }
    public get buildProducts(): Array<BuildProduct> | undefined {
        return this['build_products'];
    }
    public withCasePackageEnvName(casePackageEnvName: string): TaskInfoV4VoReq {
        this['case_package_env_name'] = casePackageEnvName;
        return this;
    }
    public set casePackageEnvName(casePackageEnvName: string  | undefined) {
        this['case_package_env_name'] = casePackageEnvName;
    }
    public get casePackageEnvName(): string | undefined {
        return this['case_package_env_name'];
    }
    public withCasePackageId(casePackageId: string): TaskInfoV4VoReq {
        this['case_package_id'] = casePackageId;
        return this;
    }
    public set casePackageId(casePackageId: string  | undefined) {
        this['case_package_id'] = casePackageId;
    }
    public get casePackageId(): string | undefined {
        return this['case_package_id'];
    }
    public withCasePackageName(casePackageName: string): TaskInfoV4VoReq {
        this['case_package_name'] = casePackageName;
        return this;
    }
    public set casePackageName(casePackageName: string  | undefined) {
        this['case_package_name'] = casePackageName;
    }
    public get casePackageName(): string | undefined {
        return this['case_package_name'];
    }
    public withCaseTotal(caseTotal: number): TaskInfoV4VoReq {
        this['case_total'] = caseTotal;
        return this;
    }
    public set caseTotal(caseTotal: number  | undefined) {
        this['case_total'] = caseTotal;
    }
    public get caseTotal(): number | undefined {
        return this['case_total'];
    }
    public withClientType(clientType: string): TaskInfoV4VoReq {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: string  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): string | undefined {
        return this['client_type'];
    }
    public withCloudTestSuiteBasicInfo(cloudTestSuiteBasicInfo: CloudTestSuiteBasicInfo): TaskInfoV4VoReq {
        this['cloudTestSuite_basicInfo'] = cloudTestSuiteBasicInfo;
        return this;
    }
    public set cloudTestSuiteBasicInfo(cloudTestSuiteBasicInfo: CloudTestSuiteBasicInfo  | undefined) {
        this['cloudTestSuite_basicInfo'] = cloudTestSuiteBasicInfo;
    }
    public get cloudTestSuiteBasicInfo(): CloudTestSuiteBasicInfo | undefined {
        return this['cloudTestSuite_basicInfo'];
    }
    public withComments(comments: string): TaskInfoV4VoReq {
        this['comments'] = comments;
        return this;
    }
    public withCreateTime(createTime: Date): TaskInfoV4VoReq {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): TaskInfoV4VoReq {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withEnvType(envType: number): TaskInfoV4VoReq {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: number  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): number | undefined {
        return this['env_type'];
    }
    public withEnvironmentGroupId(environmentGroupId: string): TaskInfoV4VoReq {
        this['environment_group_id'] = environmentGroupId;
        return this;
    }
    public set environmentGroupId(environmentGroupId: string  | undefined) {
        this['environment_group_id'] = environmentGroupId;
    }
    public get environmentGroupId(): string | undefined {
        return this['environment_group_id'];
    }
    public withExecuteStrategies(executeStrategies: ExecuteStrategiesVo): TaskInfoV4VoReq {
        this['execute_strategies'] = executeStrategies;
        return this;
    }
    public set executeStrategies(executeStrategies: ExecuteStrategiesVo  | undefined) {
        this['execute_strategies'] = executeStrategies;
    }
    public get executeStrategies(): ExecuteStrategiesVo | undefined {
        return this['execute_strategies'];
    }
    public withExecutorType(executorType: string): TaskInfoV4VoReq {
        this['executor_type'] = executorType;
        return this;
    }
    public set executorType(executorType: string  | undefined) {
        this['executor_type'] = executorType;
    }
    public get executorType(): string | undefined {
        return this['executor_type'];
    }
    public withExtParams(extParams: Array<TaskExtParam>): TaskInfoV4VoReq {
        this['ext_params'] = extParams;
        return this;
    }
    public set extParams(extParams: Array<TaskExtParam>  | undefined) {
        this['ext_params'] = extParams;
    }
    public get extParams(): Array<TaskExtParam> | undefined {
        return this['ext_params'];
    }
    public withFavorite(favorite: string): TaskInfoV4VoReq {
        this['favorite'] = favorite;
        return this;
    }
    public withId(id: string): TaskInfoV4VoReq {
        this['id'] = id;
        return this;
    }
    public withIpGroup(ipGroup: IpGroup): TaskInfoV4VoReq {
        this['ipGroup'] = ipGroup;
        return this;
    }
    public withIpKey(ipKey: string): TaskInfoV4VoReq {
        this['ipKey'] = ipKey;
        return this;
    }
    public withIsDebugTask(isDebugTask: number): TaskInfoV4VoReq {
        this['isDebugTask'] = isDebugTask;
        return this;
    }
    public withLabel(label: string): TaskInfoV4VoReq {
        this['label'] = label;
        return this;
    }
    public withLabelName(labelName: string): TaskInfoV4VoReq {
        this['labelName'] = labelName;
        return this;
    }
    public withLabelType(labelType: string): TaskInfoV4VoReq {
        this['labelType'] = labelType;
        return this;
    }
    public withLastStopTime(lastStopTime: number): TaskInfoV4VoReq {
        this['lastStopTime'] = lastStopTime;
        return this;
    }
    public withLocationIds(locationIds: Array<string>): TaskInfoV4VoReq {
        this['location_ids'] = locationIds;
        return this;
    }
    public set locationIds(locationIds: Array<string>  | undefined) {
        this['location_ids'] = locationIds;
    }
    public get locationIds(): Array<string> | undefined {
        return this['location_ids'];
    }
    public withName(name: string): TaskInfoV4VoReq {
        this['name'] = name;
        return this;
    }
    public withPlanId(planId: string): TaskInfoV4VoReq {
        this['planId'] = planId;
        return this;
    }
    public withPreTestCaseInfo(preTestCaseInfo: PreTestCaseInfo): TaskInfoV4VoReq {
        this['preTestCaseInfo'] = preTestCaseInfo;
        return this;
    }
    public withResourcePool(resourcePool: ResourcePool): TaskInfoV4VoReq {
        this['resourcePool'] = resourcePool;
        return this;
    }
    public withState(state: number): TaskInfoV4VoReq {
        this['state'] = state;
        return this;
    }
    public withSubtaskId(subtaskId: string): TaskInfoV4VoReq {
        this['subtask_id'] = subtaskId;
        return this;
    }
    public set subtaskId(subtaskId: string  | undefined) {
        this['subtask_id'] = subtaskId;
    }
    public get subtaskId(): string | undefined {
        return this['subtask_id'];
    }
    public withSubtaskTotal(subtaskTotal: number): TaskInfoV4VoReq {
        this['subtaskTotal'] = subtaskTotal;
        return this;
    }
    public withTaskTypeId(taskTypeId: string): TaskInfoV4VoReq {
        this['taskTypeId'] = taskTypeId;
        return this;
    }
    public withTestCases(testCases: Array<TestCaseBasicInfo>): TaskInfoV4VoReq {
        this['testCases'] = testCases;
        return this;
    }
    public withTestServiceId(testServiceId: string): TaskInfoV4VoReq {
        this['test_service_id'] = testServiceId;
        return this;
    }
    public set testServiceId(testServiceId: string  | undefined) {
        this['test_service_id'] = testServiceId;
    }
    public get testServiceId(): string | undefined {
        return this['test_service_id'];
    }
    public withTestSuiteType(testSuiteType: number): TaskInfoV4VoReq {
        this['testSuiteType'] = testSuiteType;
        return this;
    }
    public withTip(tip: string): TaskInfoV4VoReq {
        this['tip'] = tip;
        return this;
    }
    public withUpdateTime(updateTime: Date): TaskInfoV4VoReq {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): TaskInfoV4VoReq {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withVersion(version: string): TaskInfoV4VoReq {
        this['version'] = version;
        return this;
    }
}