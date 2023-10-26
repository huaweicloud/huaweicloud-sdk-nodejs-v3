import { DiscoveryRule } from './DiscoveryRule';
import { LogPathRule } from './LogPathRule';
import { NameRule } from './NameRule';


export class AppRulesSpec {
    public appType?: string;
    public attrList?: Array<string>;
    public detectLog?: string;
    public discoveryRule?: Array<DiscoveryRule>;
    public isDefaultRule?: string;
    public isDetect?: string;
    public logFileFix?: Array<string>;
    public logPathRule?: Array<LogPathRule>;
    public nameRule?: NameRule;
    public priority?: number;
    public constructor(appType?: string, detectLog?: string, discoveryRule?: Array<DiscoveryRule>, isDefaultRule?: string, isDetect?: string, logFileFix?: Array<string>, nameRule?: NameRule, priority?: number) { 
        this['appType'] = appType;
        this['detectLog'] = detectLog;
        this['discoveryRule'] = discoveryRule;
        this['isDefaultRule'] = isDefaultRule;
        this['isDetect'] = isDetect;
        this['logFileFix'] = logFileFix;
        this['nameRule'] = nameRule;
        this['priority'] = priority;
    }
    public withAppType(appType: string): AppRulesSpec {
        this['appType'] = appType;
        return this;
    }
    public withAttrList(attrList: Array<string>): AppRulesSpec {
        this['attrList'] = attrList;
        return this;
    }
    public withDetectLog(detectLog: string): AppRulesSpec {
        this['detectLog'] = detectLog;
        return this;
    }
    public withDiscoveryRule(discoveryRule: Array<DiscoveryRule>): AppRulesSpec {
        this['discoveryRule'] = discoveryRule;
        return this;
    }
    public withIsDefaultRule(isDefaultRule: string): AppRulesSpec {
        this['isDefaultRule'] = isDefaultRule;
        return this;
    }
    public withIsDetect(isDetect: string): AppRulesSpec {
        this['isDetect'] = isDetect;
        return this;
    }
    public withLogFileFix(logFileFix: Array<string>): AppRulesSpec {
        this['logFileFix'] = logFileFix;
        return this;
    }
    public withLogPathRule(logPathRule: Array<LogPathRule>): AppRulesSpec {
        this['logPathRule'] = logPathRule;
        return this;
    }
    public withNameRule(nameRule: NameRule): AppRulesSpec {
        this['nameRule'] = nameRule;
        return this;
    }
    public withPriority(priority: number): AppRulesSpec {
        this['priority'] = priority;
        return this;
    }
}