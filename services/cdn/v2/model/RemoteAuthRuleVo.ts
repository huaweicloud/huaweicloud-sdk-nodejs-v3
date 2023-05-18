import { CustomArgs } from './CustomArgs';


export class RemoteAuthRuleVo {
    private 'auth_server': string | undefined;
    private 'request_method': string | undefined;
    private 'file_type_setting': string | undefined;
    private 'specified_file_type'?: string | undefined;
    private 'reserve_args_setting': string | undefined;
    private 'reserve_args'?: string | undefined;
    private 'add_custom_args_rules'?: Array<CustomArgs> | undefined;
    private 'reserve_headers_setting': string | undefined;
    private 'add_custom_headers_rules'?: Array<CustomArgs> | undefined;
    private 'auth_success_status': string | undefined;
    private 'auth_failed_status': string | undefined;
    private 'response_status': string | undefined;
    public timeout: number;
    private 'timeout_action': string | undefined;
    private 'reserve_headers'?: string | undefined;
    public constructor(authServer?: any, requestMethod?: any, fileTypeSetting?: any, reserveArgsSetting?: any, reserveHeadersSetting?: any, authSuccessStatus?: any, authFailedStatus?: any, responseStatus?: any, timeout?: any, timeoutAction?: any) { 
        this['auth_server'] = authServer;
        this['request_method'] = requestMethod;
        this['file_type_setting'] = fileTypeSetting;
        this['reserve_args_setting'] = reserveArgsSetting;
        this['reserve_headers_setting'] = reserveHeadersSetting;
        this['auth_success_status'] = authSuccessStatus;
        this['auth_failed_status'] = authFailedStatus;
        this['response_status'] = responseStatus;
        this['timeout'] = timeout;
        this['timeout_action'] = timeoutAction;
    }
    public withAuthServer(authServer: string): RemoteAuthRuleVo {
        this['auth_server'] = authServer;
        return this;
    }
    public set authServer(authServer: string | undefined) {
        this['auth_server'] = authServer;
    }
    public get authServer() {
        return this['auth_server'];
    }
    public withRequestMethod(requestMethod: string): RemoteAuthRuleVo {
        this['request_method'] = requestMethod;
        return this;
    }
    public set requestMethod(requestMethod: string | undefined) {
        this['request_method'] = requestMethod;
    }
    public get requestMethod() {
        return this['request_method'];
    }
    public withFileTypeSetting(fileTypeSetting: string): RemoteAuthRuleVo {
        this['file_type_setting'] = fileTypeSetting;
        return this;
    }
    public set fileTypeSetting(fileTypeSetting: string | undefined) {
        this['file_type_setting'] = fileTypeSetting;
    }
    public get fileTypeSetting() {
        return this['file_type_setting'];
    }
    public withSpecifiedFileType(specifiedFileType: string): RemoteAuthRuleVo {
        this['specified_file_type'] = specifiedFileType;
        return this;
    }
    public set specifiedFileType(specifiedFileType: string | undefined) {
        this['specified_file_type'] = specifiedFileType;
    }
    public get specifiedFileType() {
        return this['specified_file_type'];
    }
    public withReserveArgsSetting(reserveArgsSetting: string): RemoteAuthRuleVo {
        this['reserve_args_setting'] = reserveArgsSetting;
        return this;
    }
    public set reserveArgsSetting(reserveArgsSetting: string | undefined) {
        this['reserve_args_setting'] = reserveArgsSetting;
    }
    public get reserveArgsSetting() {
        return this['reserve_args_setting'];
    }
    public withReserveArgs(reserveArgs: string): RemoteAuthRuleVo {
        this['reserve_args'] = reserveArgs;
        return this;
    }
    public set reserveArgs(reserveArgs: string | undefined) {
        this['reserve_args'] = reserveArgs;
    }
    public get reserveArgs() {
        return this['reserve_args'];
    }
    public withAddCustomArgsRules(addCustomArgsRules: Array<CustomArgs>): RemoteAuthRuleVo {
        this['add_custom_args_rules'] = addCustomArgsRules;
        return this;
    }
    public set addCustomArgsRules(addCustomArgsRules: Array<CustomArgs> | undefined) {
        this['add_custom_args_rules'] = addCustomArgsRules;
    }
    public get addCustomArgsRules() {
        return this['add_custom_args_rules'];
    }
    public withReserveHeadersSetting(reserveHeadersSetting: string): RemoteAuthRuleVo {
        this['reserve_headers_setting'] = reserveHeadersSetting;
        return this;
    }
    public set reserveHeadersSetting(reserveHeadersSetting: string | undefined) {
        this['reserve_headers_setting'] = reserveHeadersSetting;
    }
    public get reserveHeadersSetting() {
        return this['reserve_headers_setting'];
    }
    public withAddCustomHeadersRules(addCustomHeadersRules: Array<CustomArgs>): RemoteAuthRuleVo {
        this['add_custom_headers_rules'] = addCustomHeadersRules;
        return this;
    }
    public set addCustomHeadersRules(addCustomHeadersRules: Array<CustomArgs> | undefined) {
        this['add_custom_headers_rules'] = addCustomHeadersRules;
    }
    public get addCustomHeadersRules() {
        return this['add_custom_headers_rules'];
    }
    public withAuthSuccessStatus(authSuccessStatus: string): RemoteAuthRuleVo {
        this['auth_success_status'] = authSuccessStatus;
        return this;
    }
    public set authSuccessStatus(authSuccessStatus: string | undefined) {
        this['auth_success_status'] = authSuccessStatus;
    }
    public get authSuccessStatus() {
        return this['auth_success_status'];
    }
    public withAuthFailedStatus(authFailedStatus: string): RemoteAuthRuleVo {
        this['auth_failed_status'] = authFailedStatus;
        return this;
    }
    public set authFailedStatus(authFailedStatus: string | undefined) {
        this['auth_failed_status'] = authFailedStatus;
    }
    public get authFailedStatus() {
        return this['auth_failed_status'];
    }
    public withResponseStatus(responseStatus: string): RemoteAuthRuleVo {
        this['response_status'] = responseStatus;
        return this;
    }
    public set responseStatus(responseStatus: string | undefined) {
        this['response_status'] = responseStatus;
    }
    public get responseStatus() {
        return this['response_status'];
    }
    public withTimeout(timeout: number): RemoteAuthRuleVo {
        this['timeout'] = timeout;
        return this;
    }
    public withTimeoutAction(timeoutAction: string): RemoteAuthRuleVo {
        this['timeout_action'] = timeoutAction;
        return this;
    }
    public set timeoutAction(timeoutAction: string | undefined) {
        this['timeout_action'] = timeoutAction;
    }
    public get timeoutAction() {
        return this['timeout_action'];
    }
    public withReserveHeaders(reserveHeaders: string): RemoteAuthRuleVo {
        this['reserve_headers'] = reserveHeaders;
        return this;
    }
    public set reserveHeaders(reserveHeaders: string | undefined) {
        this['reserve_headers'] = reserveHeaders;
    }
    public get reserveHeaders() {
        return this['reserve_headers'];
    }
}