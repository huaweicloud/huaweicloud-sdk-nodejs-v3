
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListThreatsResponse extends SdkResponse {
    public xss?: number;
    public sqli?: number;
    public cmdi?: number;
    public lfi?: number;
    public rfi?: number;
    public webshell?: number;
    public robot?: number;
    public cc?: number;
    public custom?: number;
    public whiteblackip?: number;
    public antileakage?: number;
    public antitamper?: number;
    public constructor() { 
        super();
    }
    public withXss(xss: number): ListThreatsResponse {
        this['xss'] = xss;
        return this;
    }
    public withSqli(sqli: number): ListThreatsResponse {
        this['sqli'] = sqli;
        return this;
    }
    public withCmdi(cmdi: number): ListThreatsResponse {
        this['cmdi'] = cmdi;
        return this;
    }
    public withLfi(lfi: number): ListThreatsResponse {
        this['lfi'] = lfi;
        return this;
    }
    public withRfi(rfi: number): ListThreatsResponse {
        this['rfi'] = rfi;
        return this;
    }
    public withWebshell(webshell: number): ListThreatsResponse {
        this['webshell'] = webshell;
        return this;
    }
    public withRobot(robot: number): ListThreatsResponse {
        this['robot'] = robot;
        return this;
    }
    public withCc(cc: number): ListThreatsResponse {
        this['cc'] = cc;
        return this;
    }
    public withCustom(custom: number): ListThreatsResponse {
        this['custom'] = custom;
        return this;
    }
    public withWhiteblackip(whiteblackip: number): ListThreatsResponse {
        this['whiteblackip'] = whiteblackip;
        return this;
    }
    public withAntileakage(antileakage: number): ListThreatsResponse {
        this['antileakage'] = antileakage;
        return this;
    }
    public withAntitamper(antitamper: number): ListThreatsResponse {
        this['antitamper'] = antitamper;
        return this;
    }
}