import { DiagnoseResult } from './DiagnoseResult';


export class ClassificationResult {
    public result?: DiagnoseResult;
    private 'security_level'?: boolean;
    public classification?: boolean;
    public constructor() { 
    }
    public withResult(result: DiagnoseResult): ClassificationResult {
        this['result'] = result;
        return this;
    }
    public withSecurityLevel(securityLevel: boolean): ClassificationResult {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: boolean  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): boolean | undefined {
        return this['security_level'];
    }
    public withClassification(classification: boolean): ClassificationResult {
        this['classification'] = classification;
        return this;
    }
}