

export class ShowVulReportDataResponseInfoSumary {
    private 'vul_num_repair_necessity'?: number;
    public constructor() { 
    }
    public withVulNumRepairNecessity(vulNumRepairNecessity: number): ShowVulReportDataResponseInfoSumary {
        this['vul_num_repair_necessity'] = vulNumRepairNecessity;
        return this;
    }
    public set vulNumRepairNecessity(vulNumRepairNecessity: number  | undefined) {
        this['vul_num_repair_necessity'] = vulNumRepairNecessity;
    }
    public get vulNumRepairNecessity(): number | undefined {
        return this['vul_num_repair_necessity'];
    }
}