

export class BasicAwRes {
    private 'aw_code'?: string;
    private 'aw_description'?: string;
    private 'aw_mark'?: number;
    private 'aw_operationid'?: string;
    private 'aw_tags'?: string;
    private 'aw_type'?: number;
    private 'aw_uniqueid'?: string;
    private 'by_order'?: number;
    private 'create_time'?: string;
    private 'create_time_stamp'?: number;
    private 'create_time_string'?: string;
    private 'create_user'?: string;
    private 'create_user_id'?: string;
    private 'delete_time'?: string;
    private 'delete_user'?: string;
    public description?: string;
    private 'dft_check_point_list'?: Array<object>;
    private 'dft_custom_header'?: Array<object>;
    private 'dft_retry_interval'?: string;
    private 'dft_retry_times'?: string;
    private 'dft_variable_list'?: Array<object>;
    private 'extra_info'?: object;
    private 'group_name'?: string;
    private 'has_code'?: number;
    public id?: string;
    private 'import_package'?: Array<string>;
    private 'interface_label'?: string;
    private 'is_favorite'?: number;
    public method?: string;
    public name?: string;
    public nameView?: string;
    private 'origin_project'?: string;
    private 'param_type_and_dft_value'?: Array<object>;
    private 'project_id'?: string;
    private 'protocol_type'?: string;
    private 'public_aw_lib'?: object;
    private 'public_aw_lib_id'?: string;
    public region?: string;
    private 'return_type'?: string;
    private 'root_id'?: string;
    public source?: string;
    private 'special_type'?: number;
    public tmssCaseNumber?: string;
    private 'tmss_case_id'?: string;
    private 'update_time'?: string;
    private 'update_time_stamp'?: number;
    private 'update_time_string'?: string;
    private 'update_user'?: string;
    public warningMsg?: string;
    public yamlName?: string;
    public constructor() { 
    }
    public withAwCode(awCode: string): BasicAwRes {
        this['aw_code'] = awCode;
        return this;
    }
    public set awCode(awCode: string  | undefined) {
        this['aw_code'] = awCode;
    }
    public get awCode(): string | undefined {
        return this['aw_code'];
    }
    public withAwDescription(awDescription: string): BasicAwRes {
        this['aw_description'] = awDescription;
        return this;
    }
    public set awDescription(awDescription: string  | undefined) {
        this['aw_description'] = awDescription;
    }
    public get awDescription(): string | undefined {
        return this['aw_description'];
    }
    public withAwMark(awMark: number): BasicAwRes {
        this['aw_mark'] = awMark;
        return this;
    }
    public set awMark(awMark: number  | undefined) {
        this['aw_mark'] = awMark;
    }
    public get awMark(): number | undefined {
        return this['aw_mark'];
    }
    public withAwOperationid(awOperationid: string): BasicAwRes {
        this['aw_operationid'] = awOperationid;
        return this;
    }
    public set awOperationid(awOperationid: string  | undefined) {
        this['aw_operationid'] = awOperationid;
    }
    public get awOperationid(): string | undefined {
        return this['aw_operationid'];
    }
    public withAwTags(awTags: string): BasicAwRes {
        this['aw_tags'] = awTags;
        return this;
    }
    public set awTags(awTags: string  | undefined) {
        this['aw_tags'] = awTags;
    }
    public get awTags(): string | undefined {
        return this['aw_tags'];
    }
    public withAwType(awType: number): BasicAwRes {
        this['aw_type'] = awType;
        return this;
    }
    public set awType(awType: number  | undefined) {
        this['aw_type'] = awType;
    }
    public get awType(): number | undefined {
        return this['aw_type'];
    }
    public withAwUniqueid(awUniqueid: string): BasicAwRes {
        this['aw_uniqueid'] = awUniqueid;
        return this;
    }
    public set awUniqueid(awUniqueid: string  | undefined) {
        this['aw_uniqueid'] = awUniqueid;
    }
    public get awUniqueid(): string | undefined {
        return this['aw_uniqueid'];
    }
    public withByOrder(byOrder: number): BasicAwRes {
        this['by_order'] = byOrder;
        return this;
    }
    public set byOrder(byOrder: number  | undefined) {
        this['by_order'] = byOrder;
    }
    public get byOrder(): number | undefined {
        return this['by_order'];
    }
    public withCreateTime(createTime: string): BasicAwRes {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreateTimeStamp(createTimeStamp: number): BasicAwRes {
        this['create_time_stamp'] = createTimeStamp;
        return this;
    }
    public set createTimeStamp(createTimeStamp: number  | undefined) {
        this['create_time_stamp'] = createTimeStamp;
    }
    public get createTimeStamp(): number | undefined {
        return this['create_time_stamp'];
    }
    public withCreateTimeString(createTimeString: string): BasicAwRes {
        this['create_time_string'] = createTimeString;
        return this;
    }
    public set createTimeString(createTimeString: string  | undefined) {
        this['create_time_string'] = createTimeString;
    }
    public get createTimeString(): string | undefined {
        return this['create_time_string'];
    }
    public withCreateUser(createUser: string): BasicAwRes {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withCreateUserId(createUserId: string): BasicAwRes {
        this['create_user_id'] = createUserId;
        return this;
    }
    public set createUserId(createUserId: string  | undefined) {
        this['create_user_id'] = createUserId;
    }
    public get createUserId(): string | undefined {
        return this['create_user_id'];
    }
    public withDeleteTime(deleteTime: string): BasicAwRes {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: string  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): string | undefined {
        return this['delete_time'];
    }
    public withDeleteUser(deleteUser: string): BasicAwRes {
        this['delete_user'] = deleteUser;
        return this;
    }
    public set deleteUser(deleteUser: string  | undefined) {
        this['delete_user'] = deleteUser;
    }
    public get deleteUser(): string | undefined {
        return this['delete_user'];
    }
    public withDescription(description: string): BasicAwRes {
        this['description'] = description;
        return this;
    }
    public withDftCheckPointList(dftCheckPointList: Array<object>): BasicAwRes {
        this['dft_check_point_list'] = dftCheckPointList;
        return this;
    }
    public set dftCheckPointList(dftCheckPointList: Array<object>  | undefined) {
        this['dft_check_point_list'] = dftCheckPointList;
    }
    public get dftCheckPointList(): Array<object> | undefined {
        return this['dft_check_point_list'];
    }
    public withDftCustomHeader(dftCustomHeader: Array<object>): BasicAwRes {
        this['dft_custom_header'] = dftCustomHeader;
        return this;
    }
    public set dftCustomHeader(dftCustomHeader: Array<object>  | undefined) {
        this['dft_custom_header'] = dftCustomHeader;
    }
    public get dftCustomHeader(): Array<object> | undefined {
        return this['dft_custom_header'];
    }
    public withDftRetryInterval(dftRetryInterval: string): BasicAwRes {
        this['dft_retry_interval'] = dftRetryInterval;
        return this;
    }
    public set dftRetryInterval(dftRetryInterval: string  | undefined) {
        this['dft_retry_interval'] = dftRetryInterval;
    }
    public get dftRetryInterval(): string | undefined {
        return this['dft_retry_interval'];
    }
    public withDftRetryTimes(dftRetryTimes: string): BasicAwRes {
        this['dft_retry_times'] = dftRetryTimes;
        return this;
    }
    public set dftRetryTimes(dftRetryTimes: string  | undefined) {
        this['dft_retry_times'] = dftRetryTimes;
    }
    public get dftRetryTimes(): string | undefined {
        return this['dft_retry_times'];
    }
    public withDftVariableList(dftVariableList: Array<object>): BasicAwRes {
        this['dft_variable_list'] = dftVariableList;
        return this;
    }
    public set dftVariableList(dftVariableList: Array<object>  | undefined) {
        this['dft_variable_list'] = dftVariableList;
    }
    public get dftVariableList(): Array<object> | undefined {
        return this['dft_variable_list'];
    }
    public withExtraInfo(extraInfo: object): BasicAwRes {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: object  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): object | undefined {
        return this['extra_info'];
    }
    public withGroupName(groupName: string): BasicAwRes {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHasCode(hasCode: number): BasicAwRes {
        this['has_code'] = hasCode;
        return this;
    }
    public set hasCode(hasCode: number  | undefined) {
        this['has_code'] = hasCode;
    }
    public get hasCode(): number | undefined {
        return this['has_code'];
    }
    public withId(id: string): BasicAwRes {
        this['id'] = id;
        return this;
    }
    public withImportPackage(importPackage: Array<string>): BasicAwRes {
        this['import_package'] = importPackage;
        return this;
    }
    public set importPackage(importPackage: Array<string>  | undefined) {
        this['import_package'] = importPackage;
    }
    public get importPackage(): Array<string> | undefined {
        return this['import_package'];
    }
    public withInterfaceLabel(interfaceLabel: string): BasicAwRes {
        this['interface_label'] = interfaceLabel;
        return this;
    }
    public set interfaceLabel(interfaceLabel: string  | undefined) {
        this['interface_label'] = interfaceLabel;
    }
    public get interfaceLabel(): string | undefined {
        return this['interface_label'];
    }
    public withIsFavorite(isFavorite: number): BasicAwRes {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: number  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): number | undefined {
        return this['is_favorite'];
    }
    public withMethod(method: string): BasicAwRes {
        this['method'] = method;
        return this;
    }
    public withName(name: string): BasicAwRes {
        this['name'] = name;
        return this;
    }
    public withNameView(nameView: string): BasicAwRes {
        this['nameView'] = nameView;
        return this;
    }
    public withOriginProject(originProject: string): BasicAwRes {
        this['origin_project'] = originProject;
        return this;
    }
    public set originProject(originProject: string  | undefined) {
        this['origin_project'] = originProject;
    }
    public get originProject(): string | undefined {
        return this['origin_project'];
    }
    public withParamTypeAndDftValue(paramTypeAndDftValue: Array<object>): BasicAwRes {
        this['param_type_and_dft_value'] = paramTypeAndDftValue;
        return this;
    }
    public set paramTypeAndDftValue(paramTypeAndDftValue: Array<object>  | undefined) {
        this['param_type_and_dft_value'] = paramTypeAndDftValue;
    }
    public get paramTypeAndDftValue(): Array<object> | undefined {
        return this['param_type_and_dft_value'];
    }
    public withProjectId(projectId: string): BasicAwRes {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocolType(protocolType: string): BasicAwRes {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withPublicAwLib(publicAwLib: object): BasicAwRes {
        this['public_aw_lib'] = publicAwLib;
        return this;
    }
    public set publicAwLib(publicAwLib: object  | undefined) {
        this['public_aw_lib'] = publicAwLib;
    }
    public get publicAwLib(): object | undefined {
        return this['public_aw_lib'];
    }
    public withPublicAwLibId(publicAwLibId: string): BasicAwRes {
        this['public_aw_lib_id'] = publicAwLibId;
        return this;
    }
    public set publicAwLibId(publicAwLibId: string  | undefined) {
        this['public_aw_lib_id'] = publicAwLibId;
    }
    public get publicAwLibId(): string | undefined {
        return this['public_aw_lib_id'];
    }
    public withRegion(region: string): BasicAwRes {
        this['region'] = region;
        return this;
    }
    public withReturnType(returnType: string): BasicAwRes {
        this['return_type'] = returnType;
        return this;
    }
    public set returnType(returnType: string  | undefined) {
        this['return_type'] = returnType;
    }
    public get returnType(): string | undefined {
        return this['return_type'];
    }
    public withRootId(rootId: string): BasicAwRes {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withSource(source: string): BasicAwRes {
        this['source'] = source;
        return this;
    }
    public withSpecialType(specialType: number): BasicAwRes {
        this['special_type'] = specialType;
        return this;
    }
    public set specialType(specialType: number  | undefined) {
        this['special_type'] = specialType;
    }
    public get specialType(): number | undefined {
        return this['special_type'];
    }
    public withTmssCaseNumber(tmssCaseNumber: string): BasicAwRes {
        this['tmssCaseNumber'] = tmssCaseNumber;
        return this;
    }
    public withTmssCaseId(tmssCaseId: string): BasicAwRes {
        this['tmss_case_id'] = tmssCaseId;
        return this;
    }
    public set tmssCaseId(tmssCaseId: string  | undefined) {
        this['tmss_case_id'] = tmssCaseId;
    }
    public get tmssCaseId(): string | undefined {
        return this['tmss_case_id'];
    }
    public withUpdateTime(updateTime: string): BasicAwRes {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withUpdateTimeStamp(updateTimeStamp: number): BasicAwRes {
        this['update_time_stamp'] = updateTimeStamp;
        return this;
    }
    public set updateTimeStamp(updateTimeStamp: number  | undefined) {
        this['update_time_stamp'] = updateTimeStamp;
    }
    public get updateTimeStamp(): number | undefined {
        return this['update_time_stamp'];
    }
    public withUpdateTimeString(updateTimeString: string): BasicAwRes {
        this['update_time_string'] = updateTimeString;
        return this;
    }
    public set updateTimeString(updateTimeString: string  | undefined) {
        this['update_time_string'] = updateTimeString;
    }
    public get updateTimeString(): string | undefined {
        return this['update_time_string'];
    }
    public withUpdateUser(updateUser: string): BasicAwRes {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withWarningMsg(warningMsg: string): BasicAwRes {
        this['warningMsg'] = warningMsg;
        return this;
    }
    public withYamlName(yamlName: string): BasicAwRes {
        this['yamlName'] = yamlName;
        return this;
    }
}