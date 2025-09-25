

export class SecurityCheckVulInfo {
    private 'vul_name'?: string;
    private 'vul_id'?: string;
    private 'repair_necessity'?: string;
    private 'scan_time'?: number;
    public type?: string;
    private 'repair_cmd'?: string;
    private 'severity_level'?: string;
    public constructor() { 
    }
    public withVulName(vulName: string): SecurityCheckVulInfo {
        this['vul_name'] = vulName;
        return this;
    }
    public set vulName(vulName: string  | undefined) {
        this['vul_name'] = vulName;
    }
    public get vulName(): string | undefined {
        return this['vul_name'];
    }
    public withVulId(vulId: string): SecurityCheckVulInfo {
        this['vul_id'] = vulId;
        return this;
    }
    public set vulId(vulId: string  | undefined) {
        this['vul_id'] = vulId;
    }
    public get vulId(): string | undefined {
        return this['vul_id'];
    }
    public withRepairNecessity(repairNecessity: string): SecurityCheckVulInfo {
        this['repair_necessity'] = repairNecessity;
        return this;
    }
    public set repairNecessity(repairNecessity: string  | undefined) {
        this['repair_necessity'] = repairNecessity;
    }
    public get repairNecessity(): string | undefined {
        return this['repair_necessity'];
    }
    public withScanTime(scanTime: number): SecurityCheckVulInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withType(type: string): SecurityCheckVulInfo {
        this['type'] = type;
        return this;
    }
    public withRepairCmd(repairCmd: string): SecurityCheckVulInfo {
        this['repair_cmd'] = repairCmd;
        return this;
    }
    public set repairCmd(repairCmd: string  | undefined) {
        this['repair_cmd'] = repairCmd;
    }
    public get repairCmd(): string | undefined {
        return this['repair_cmd'];
    }
    public withSeverityLevel(severityLevel: string): SecurityCheckVulInfo {
        this['severity_level'] = severityLevel;
        return this;
    }
    public set severityLevel(severityLevel: string  | undefined) {
        this['severity_level'] = severityLevel;
    }
    public get severityLevel(): string | undefined {
        return this['severity_level'];
    }
}