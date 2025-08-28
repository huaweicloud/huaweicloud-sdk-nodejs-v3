

export class ShowVulReportDataResponseInfoSumary {
    private 'vul_num_repair_necessity'?: number;
    private 'vul_num_unfixed'?: number;
    private 'vul_num_linux'?: number;
    private 'vul_num_windows'?: number;
    private 'vul_num_web_cms'?: number;
    private 'vul_num_app'?: number;
    private 'host_num_risk'?: number;
    private 'host_num_high_risk'?: number;
    private 'host_num_medium_risk'?: number;
    private 'host_num_low_risk'?: number;
    private 'affect_asset_num_important'?: number;
    private 'affect_asset_num_common'?: number;
    private 'affect_asset_num_test'?: number;
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
    public withVulNumUnfixed(vulNumUnfixed: number): ShowVulReportDataResponseInfoSumary {
        this['vul_num_unfixed'] = vulNumUnfixed;
        return this;
    }
    public set vulNumUnfixed(vulNumUnfixed: number  | undefined) {
        this['vul_num_unfixed'] = vulNumUnfixed;
    }
    public get vulNumUnfixed(): number | undefined {
        return this['vul_num_unfixed'];
    }
    public withVulNumLinux(vulNumLinux: number): ShowVulReportDataResponseInfoSumary {
        this['vul_num_linux'] = vulNumLinux;
        return this;
    }
    public set vulNumLinux(vulNumLinux: number  | undefined) {
        this['vul_num_linux'] = vulNumLinux;
    }
    public get vulNumLinux(): number | undefined {
        return this['vul_num_linux'];
    }
    public withVulNumWindows(vulNumWindows: number): ShowVulReportDataResponseInfoSumary {
        this['vul_num_windows'] = vulNumWindows;
        return this;
    }
    public set vulNumWindows(vulNumWindows: number  | undefined) {
        this['vul_num_windows'] = vulNumWindows;
    }
    public get vulNumWindows(): number | undefined {
        return this['vul_num_windows'];
    }
    public withVulNumWebCms(vulNumWebCms: number): ShowVulReportDataResponseInfoSumary {
        this['vul_num_web_cms'] = vulNumWebCms;
        return this;
    }
    public set vulNumWebCms(vulNumWebCms: number  | undefined) {
        this['vul_num_web_cms'] = vulNumWebCms;
    }
    public get vulNumWebCms(): number | undefined {
        return this['vul_num_web_cms'];
    }
    public withVulNumApp(vulNumApp: number): ShowVulReportDataResponseInfoSumary {
        this['vul_num_app'] = vulNumApp;
        return this;
    }
    public set vulNumApp(vulNumApp: number  | undefined) {
        this['vul_num_app'] = vulNumApp;
    }
    public get vulNumApp(): number | undefined {
        return this['vul_num_app'];
    }
    public withHostNumRisk(hostNumRisk: number): ShowVulReportDataResponseInfoSumary {
        this['host_num_risk'] = hostNumRisk;
        return this;
    }
    public set hostNumRisk(hostNumRisk: number  | undefined) {
        this['host_num_risk'] = hostNumRisk;
    }
    public get hostNumRisk(): number | undefined {
        return this['host_num_risk'];
    }
    public withHostNumHighRisk(hostNumHighRisk: number): ShowVulReportDataResponseInfoSumary {
        this['host_num_high_risk'] = hostNumHighRisk;
        return this;
    }
    public set hostNumHighRisk(hostNumHighRisk: number  | undefined) {
        this['host_num_high_risk'] = hostNumHighRisk;
    }
    public get hostNumHighRisk(): number | undefined {
        return this['host_num_high_risk'];
    }
    public withHostNumMediumRisk(hostNumMediumRisk: number): ShowVulReportDataResponseInfoSumary {
        this['host_num_medium_risk'] = hostNumMediumRisk;
        return this;
    }
    public set hostNumMediumRisk(hostNumMediumRisk: number  | undefined) {
        this['host_num_medium_risk'] = hostNumMediumRisk;
    }
    public get hostNumMediumRisk(): number | undefined {
        return this['host_num_medium_risk'];
    }
    public withHostNumLowRisk(hostNumLowRisk: number): ShowVulReportDataResponseInfoSumary {
        this['host_num_low_risk'] = hostNumLowRisk;
        return this;
    }
    public set hostNumLowRisk(hostNumLowRisk: number  | undefined) {
        this['host_num_low_risk'] = hostNumLowRisk;
    }
    public get hostNumLowRisk(): number | undefined {
        return this['host_num_low_risk'];
    }
    public withAffectAssetNumImportant(affectAssetNumImportant: number): ShowVulReportDataResponseInfoSumary {
        this['affect_asset_num_important'] = affectAssetNumImportant;
        return this;
    }
    public set affectAssetNumImportant(affectAssetNumImportant: number  | undefined) {
        this['affect_asset_num_important'] = affectAssetNumImportant;
    }
    public get affectAssetNumImportant(): number | undefined {
        return this['affect_asset_num_important'];
    }
    public withAffectAssetNumCommon(affectAssetNumCommon: number): ShowVulReportDataResponseInfoSumary {
        this['affect_asset_num_common'] = affectAssetNumCommon;
        return this;
    }
    public set affectAssetNumCommon(affectAssetNumCommon: number  | undefined) {
        this['affect_asset_num_common'] = affectAssetNumCommon;
    }
    public get affectAssetNumCommon(): number | undefined {
        return this['affect_asset_num_common'];
    }
    public withAffectAssetNumTest(affectAssetNumTest: number): ShowVulReportDataResponseInfoSumary {
        this['affect_asset_num_test'] = affectAssetNumTest;
        return this;
    }
    public set affectAssetNumTest(affectAssetNumTest: number  | undefined) {
        this['affect_asset_num_test'] = affectAssetNumTest;
    }
    public get affectAssetNumTest(): number | undefined {
        return this['affect_asset_num_test'];
    }
}