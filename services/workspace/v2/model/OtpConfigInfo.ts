import { ApplyObjects } from './ApplyObjects';
import { ApplyRuleInfo } from './ApplyRuleInfo';
import { AuthServerAccessMode } from './AuthServerAccessMode';
import { ReceiveModeEnum } from './ReceiveModeEnum';


export class OtpConfigInfo {
    public id?: string;
    public enable?: boolean;
    private 'receive_mode'?: ReceiveModeEnum;
    private 'auth_url'?: string;
    private 'app_id'?: string;
    private 'app_secret'?: string;
    private 'auth_server_access_mode'?: AuthServerAccessMode;
    private 'cert_content'?: string;
    private 'apply_rule'?: ApplyRuleInfo;
    private 'apply_objects'?: Array<ApplyObjects>;
    public constructor() { 
    }
    public withId(id: string): OtpConfigInfo {
        this['id'] = id;
        return this;
    }
    public withEnable(enable: boolean): OtpConfigInfo {
        this['enable'] = enable;
        return this;
    }
    public withReceiveMode(receiveMode: ReceiveModeEnum): OtpConfigInfo {
        this['receive_mode'] = receiveMode;
        return this;
    }
    public set receiveMode(receiveMode: ReceiveModeEnum  | undefined) {
        this['receive_mode'] = receiveMode;
    }
    public get receiveMode(): ReceiveModeEnum | undefined {
        return this['receive_mode'];
    }
    public withAuthUrl(authUrl: string): OtpConfigInfo {
        this['auth_url'] = authUrl;
        return this;
    }
    public set authUrl(authUrl: string  | undefined) {
        this['auth_url'] = authUrl;
    }
    public get authUrl(): string | undefined {
        return this['auth_url'];
    }
    public withAppId(appId: string): OtpConfigInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppSecret(appSecret: string): OtpConfigInfo {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withAuthServerAccessMode(authServerAccessMode: AuthServerAccessMode): OtpConfigInfo {
        this['auth_server_access_mode'] = authServerAccessMode;
        return this;
    }
    public set authServerAccessMode(authServerAccessMode: AuthServerAccessMode  | undefined) {
        this['auth_server_access_mode'] = authServerAccessMode;
    }
    public get authServerAccessMode(): AuthServerAccessMode | undefined {
        return this['auth_server_access_mode'];
    }
    public withCertContent(certContent: string): OtpConfigInfo {
        this['cert_content'] = certContent;
        return this;
    }
    public set certContent(certContent: string  | undefined) {
        this['cert_content'] = certContent;
    }
    public get certContent(): string | undefined {
        return this['cert_content'];
    }
    public withApplyRule(applyRule: ApplyRuleInfo): OtpConfigInfo {
        this['apply_rule'] = applyRule;
        return this;
    }
    public set applyRule(applyRule: ApplyRuleInfo  | undefined) {
        this['apply_rule'] = applyRule;
    }
    public get applyRule(): ApplyRuleInfo | undefined {
        return this['apply_rule'];
    }
    public withApplyObjects(applyObjects: Array<ApplyObjects>): OtpConfigInfo {
        this['apply_objects'] = applyObjects;
        return this;
    }
    public set applyObjects(applyObjects: Array<ApplyObjects>  | undefined) {
        this['apply_objects'] = applyObjects;
    }
    public get applyObjects(): Array<ApplyObjects> | undefined {
        return this['apply_objects'];
    }
}