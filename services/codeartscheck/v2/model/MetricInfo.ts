

export class MetricInfo {
    private 'code_size'?: string;
    private 'raw_lines'?: string;
    private 'methods_total'?: string;
    private 'cyclomatic_complexity_total'?: string;
    private 'cyclomatic_complexity_per_method'?: string;
    private 'maximum_cyclomatic_complexity'?: string;
    private 'huge_cyclomatic_complexity_total'?: string;
    private 'huge_cyclomatic_complexity_ratio'?: string;
    private 'cca_cyclomatic_complexity_total'?: string;
    private 'cca_cyclomatic_complexity_per_method'?: string;
    private 'maximum_cca_cyclomatic_complexity'?: string;
    private 'huge_cca_cyclomatic_complexity_total'?: string;
    private 'cyclomatic_complexity_adequacy'?: string;
    private 'maximum_depth'?: string;
    private 'huge_depth_total'?: string;
    private 'huge_depth_ratio'?: string;
    private 'method_lines'?: string;
    private 'lines_per_method'?: string;
    private 'huge_method_total'?: string;
    private 'huge_method_ratio'?: string;
    private 'files_total'?: string;
    private 'folders_total'?: string;
    private 'lines_per_file'?: string;
    private 'huge_headerfile_total'?: string;
    private 'huge_headerfile_ratio'?: string;
    private 'huge_non_headerfile_total'?: string;
    private 'huge_non_headerfile_ratio'?: string;
    private 'huge_folder_total'?: string;
    private 'huge_folder_ratio'?: string;
    private 'file_duplication_total'?: string;
    private 'file_duplication_ratio'?: string;
    private 'non_hfile_duplication_total'?: string;
    private 'non_hfile_duplication_ratio'?: string;
    private 'code_duplication_total'?: string;
    private 'code_duplication_ratio'?: string;
    private 'non_hfile_code_duplication_total'?: string;
    private 'non_hfile_code_duplication_ratio'?: string;
    private 'unsafe_functions_total'?: string;
    private 'unsafe_functions_kloc'?: string;
    private 'redundant_code_total'?: string;
    private 'redundant_code_kloc'?: string;
    private 'warning_suppression_total'?: string;
    private 'warning_suppression_kloc'?: string;
    public constructor() { 
    }
    public withCodeSize(codeSize: string): MetricInfo {
        this['code_size'] = codeSize;
        return this;
    }
    public set codeSize(codeSize: string  | undefined) {
        this['code_size'] = codeSize;
    }
    public get codeSize(): string | undefined {
        return this['code_size'];
    }
    public withRawLines(rawLines: string): MetricInfo {
        this['raw_lines'] = rawLines;
        return this;
    }
    public set rawLines(rawLines: string  | undefined) {
        this['raw_lines'] = rawLines;
    }
    public get rawLines(): string | undefined {
        return this['raw_lines'];
    }
    public withMethodsTotal(methodsTotal: string): MetricInfo {
        this['methods_total'] = methodsTotal;
        return this;
    }
    public set methodsTotal(methodsTotal: string  | undefined) {
        this['methods_total'] = methodsTotal;
    }
    public get methodsTotal(): string | undefined {
        return this['methods_total'];
    }
    public withCyclomaticComplexityTotal(cyclomaticComplexityTotal: string): MetricInfo {
        this['cyclomatic_complexity_total'] = cyclomaticComplexityTotal;
        return this;
    }
    public set cyclomaticComplexityTotal(cyclomaticComplexityTotal: string  | undefined) {
        this['cyclomatic_complexity_total'] = cyclomaticComplexityTotal;
    }
    public get cyclomaticComplexityTotal(): string | undefined {
        return this['cyclomatic_complexity_total'];
    }
    public withCyclomaticComplexityPerMethod(cyclomaticComplexityPerMethod: string): MetricInfo {
        this['cyclomatic_complexity_per_method'] = cyclomaticComplexityPerMethod;
        return this;
    }
    public set cyclomaticComplexityPerMethod(cyclomaticComplexityPerMethod: string  | undefined) {
        this['cyclomatic_complexity_per_method'] = cyclomaticComplexityPerMethod;
    }
    public get cyclomaticComplexityPerMethod(): string | undefined {
        return this['cyclomatic_complexity_per_method'];
    }
    public withMaximumCyclomaticComplexity(maximumCyclomaticComplexity: string): MetricInfo {
        this['maximum_cyclomatic_complexity'] = maximumCyclomaticComplexity;
        return this;
    }
    public set maximumCyclomaticComplexity(maximumCyclomaticComplexity: string  | undefined) {
        this['maximum_cyclomatic_complexity'] = maximumCyclomaticComplexity;
    }
    public get maximumCyclomaticComplexity(): string | undefined {
        return this['maximum_cyclomatic_complexity'];
    }
    public withHugeCyclomaticComplexityTotal(hugeCyclomaticComplexityTotal: string): MetricInfo {
        this['huge_cyclomatic_complexity_total'] = hugeCyclomaticComplexityTotal;
        return this;
    }
    public set hugeCyclomaticComplexityTotal(hugeCyclomaticComplexityTotal: string  | undefined) {
        this['huge_cyclomatic_complexity_total'] = hugeCyclomaticComplexityTotal;
    }
    public get hugeCyclomaticComplexityTotal(): string | undefined {
        return this['huge_cyclomatic_complexity_total'];
    }
    public withHugeCyclomaticComplexityRatio(hugeCyclomaticComplexityRatio: string): MetricInfo {
        this['huge_cyclomatic_complexity_ratio'] = hugeCyclomaticComplexityRatio;
        return this;
    }
    public set hugeCyclomaticComplexityRatio(hugeCyclomaticComplexityRatio: string  | undefined) {
        this['huge_cyclomatic_complexity_ratio'] = hugeCyclomaticComplexityRatio;
    }
    public get hugeCyclomaticComplexityRatio(): string | undefined {
        return this['huge_cyclomatic_complexity_ratio'];
    }
    public withCcaCyclomaticComplexityTotal(ccaCyclomaticComplexityTotal: string): MetricInfo {
        this['cca_cyclomatic_complexity_total'] = ccaCyclomaticComplexityTotal;
        return this;
    }
    public set ccaCyclomaticComplexityTotal(ccaCyclomaticComplexityTotal: string  | undefined) {
        this['cca_cyclomatic_complexity_total'] = ccaCyclomaticComplexityTotal;
    }
    public get ccaCyclomaticComplexityTotal(): string | undefined {
        return this['cca_cyclomatic_complexity_total'];
    }
    public withCcaCyclomaticComplexityPerMethod(ccaCyclomaticComplexityPerMethod: string): MetricInfo {
        this['cca_cyclomatic_complexity_per_method'] = ccaCyclomaticComplexityPerMethod;
        return this;
    }
    public set ccaCyclomaticComplexityPerMethod(ccaCyclomaticComplexityPerMethod: string  | undefined) {
        this['cca_cyclomatic_complexity_per_method'] = ccaCyclomaticComplexityPerMethod;
    }
    public get ccaCyclomaticComplexityPerMethod(): string | undefined {
        return this['cca_cyclomatic_complexity_per_method'];
    }
    public withMaximumCcaCyclomaticComplexity(maximumCcaCyclomaticComplexity: string): MetricInfo {
        this['maximum_cca_cyclomatic_complexity'] = maximumCcaCyclomaticComplexity;
        return this;
    }
    public set maximumCcaCyclomaticComplexity(maximumCcaCyclomaticComplexity: string  | undefined) {
        this['maximum_cca_cyclomatic_complexity'] = maximumCcaCyclomaticComplexity;
    }
    public get maximumCcaCyclomaticComplexity(): string | undefined {
        return this['maximum_cca_cyclomatic_complexity'];
    }
    public withHugeCcaCyclomaticComplexityTotal(hugeCcaCyclomaticComplexityTotal: string): MetricInfo {
        this['huge_cca_cyclomatic_complexity_total'] = hugeCcaCyclomaticComplexityTotal;
        return this;
    }
    public set hugeCcaCyclomaticComplexityTotal(hugeCcaCyclomaticComplexityTotal: string  | undefined) {
        this['huge_cca_cyclomatic_complexity_total'] = hugeCcaCyclomaticComplexityTotal;
    }
    public get hugeCcaCyclomaticComplexityTotal(): string | undefined {
        return this['huge_cca_cyclomatic_complexity_total'];
    }
    public withCyclomaticComplexityAdequacy(cyclomaticComplexityAdequacy: string): MetricInfo {
        this['cyclomatic_complexity_adequacy'] = cyclomaticComplexityAdequacy;
        return this;
    }
    public set cyclomaticComplexityAdequacy(cyclomaticComplexityAdequacy: string  | undefined) {
        this['cyclomatic_complexity_adequacy'] = cyclomaticComplexityAdequacy;
    }
    public get cyclomaticComplexityAdequacy(): string | undefined {
        return this['cyclomatic_complexity_adequacy'];
    }
    public withMaximumDepth(maximumDepth: string): MetricInfo {
        this['maximum_depth'] = maximumDepth;
        return this;
    }
    public set maximumDepth(maximumDepth: string  | undefined) {
        this['maximum_depth'] = maximumDepth;
    }
    public get maximumDepth(): string | undefined {
        return this['maximum_depth'];
    }
    public withHugeDepthTotal(hugeDepthTotal: string): MetricInfo {
        this['huge_depth_total'] = hugeDepthTotal;
        return this;
    }
    public set hugeDepthTotal(hugeDepthTotal: string  | undefined) {
        this['huge_depth_total'] = hugeDepthTotal;
    }
    public get hugeDepthTotal(): string | undefined {
        return this['huge_depth_total'];
    }
    public withHugeDepthRatio(hugeDepthRatio: string): MetricInfo {
        this['huge_depth_ratio'] = hugeDepthRatio;
        return this;
    }
    public set hugeDepthRatio(hugeDepthRatio: string  | undefined) {
        this['huge_depth_ratio'] = hugeDepthRatio;
    }
    public get hugeDepthRatio(): string | undefined {
        return this['huge_depth_ratio'];
    }
    public withMethodLines(methodLines: string): MetricInfo {
        this['method_lines'] = methodLines;
        return this;
    }
    public set methodLines(methodLines: string  | undefined) {
        this['method_lines'] = methodLines;
    }
    public get methodLines(): string | undefined {
        return this['method_lines'];
    }
    public withLinesPerMethod(linesPerMethod: string): MetricInfo {
        this['lines_per_method'] = linesPerMethod;
        return this;
    }
    public set linesPerMethod(linesPerMethod: string  | undefined) {
        this['lines_per_method'] = linesPerMethod;
    }
    public get linesPerMethod(): string | undefined {
        return this['lines_per_method'];
    }
    public withHugeMethodTotal(hugeMethodTotal: string): MetricInfo {
        this['huge_method_total'] = hugeMethodTotal;
        return this;
    }
    public set hugeMethodTotal(hugeMethodTotal: string  | undefined) {
        this['huge_method_total'] = hugeMethodTotal;
    }
    public get hugeMethodTotal(): string | undefined {
        return this['huge_method_total'];
    }
    public withHugeMethodRatio(hugeMethodRatio: string): MetricInfo {
        this['huge_method_ratio'] = hugeMethodRatio;
        return this;
    }
    public set hugeMethodRatio(hugeMethodRatio: string  | undefined) {
        this['huge_method_ratio'] = hugeMethodRatio;
    }
    public get hugeMethodRatio(): string | undefined {
        return this['huge_method_ratio'];
    }
    public withFilesTotal(filesTotal: string): MetricInfo {
        this['files_total'] = filesTotal;
        return this;
    }
    public set filesTotal(filesTotal: string  | undefined) {
        this['files_total'] = filesTotal;
    }
    public get filesTotal(): string | undefined {
        return this['files_total'];
    }
    public withFoldersTotal(foldersTotal: string): MetricInfo {
        this['folders_total'] = foldersTotal;
        return this;
    }
    public set foldersTotal(foldersTotal: string  | undefined) {
        this['folders_total'] = foldersTotal;
    }
    public get foldersTotal(): string | undefined {
        return this['folders_total'];
    }
    public withLinesPerFile(linesPerFile: string): MetricInfo {
        this['lines_per_file'] = linesPerFile;
        return this;
    }
    public set linesPerFile(linesPerFile: string  | undefined) {
        this['lines_per_file'] = linesPerFile;
    }
    public get linesPerFile(): string | undefined {
        return this['lines_per_file'];
    }
    public withHugeHeaderfileTotal(hugeHeaderfileTotal: string): MetricInfo {
        this['huge_headerfile_total'] = hugeHeaderfileTotal;
        return this;
    }
    public set hugeHeaderfileTotal(hugeHeaderfileTotal: string  | undefined) {
        this['huge_headerfile_total'] = hugeHeaderfileTotal;
    }
    public get hugeHeaderfileTotal(): string | undefined {
        return this['huge_headerfile_total'];
    }
    public withHugeHeaderfileRatio(hugeHeaderfileRatio: string): MetricInfo {
        this['huge_headerfile_ratio'] = hugeHeaderfileRatio;
        return this;
    }
    public set hugeHeaderfileRatio(hugeHeaderfileRatio: string  | undefined) {
        this['huge_headerfile_ratio'] = hugeHeaderfileRatio;
    }
    public get hugeHeaderfileRatio(): string | undefined {
        return this['huge_headerfile_ratio'];
    }
    public withHugeNonHeaderfileTotal(hugeNonHeaderfileTotal: string): MetricInfo {
        this['huge_non_headerfile_total'] = hugeNonHeaderfileTotal;
        return this;
    }
    public set hugeNonHeaderfileTotal(hugeNonHeaderfileTotal: string  | undefined) {
        this['huge_non_headerfile_total'] = hugeNonHeaderfileTotal;
    }
    public get hugeNonHeaderfileTotal(): string | undefined {
        return this['huge_non_headerfile_total'];
    }
    public withHugeNonHeaderfileRatio(hugeNonHeaderfileRatio: string): MetricInfo {
        this['huge_non_headerfile_ratio'] = hugeNonHeaderfileRatio;
        return this;
    }
    public set hugeNonHeaderfileRatio(hugeNonHeaderfileRatio: string  | undefined) {
        this['huge_non_headerfile_ratio'] = hugeNonHeaderfileRatio;
    }
    public get hugeNonHeaderfileRatio(): string | undefined {
        return this['huge_non_headerfile_ratio'];
    }
    public withHugeFolderTotal(hugeFolderTotal: string): MetricInfo {
        this['huge_folder_total'] = hugeFolderTotal;
        return this;
    }
    public set hugeFolderTotal(hugeFolderTotal: string  | undefined) {
        this['huge_folder_total'] = hugeFolderTotal;
    }
    public get hugeFolderTotal(): string | undefined {
        return this['huge_folder_total'];
    }
    public withHugeFolderRatio(hugeFolderRatio: string): MetricInfo {
        this['huge_folder_ratio'] = hugeFolderRatio;
        return this;
    }
    public set hugeFolderRatio(hugeFolderRatio: string  | undefined) {
        this['huge_folder_ratio'] = hugeFolderRatio;
    }
    public get hugeFolderRatio(): string | undefined {
        return this['huge_folder_ratio'];
    }
    public withFileDuplicationTotal(fileDuplicationTotal: string): MetricInfo {
        this['file_duplication_total'] = fileDuplicationTotal;
        return this;
    }
    public set fileDuplicationTotal(fileDuplicationTotal: string  | undefined) {
        this['file_duplication_total'] = fileDuplicationTotal;
    }
    public get fileDuplicationTotal(): string | undefined {
        return this['file_duplication_total'];
    }
    public withFileDuplicationRatio(fileDuplicationRatio: string): MetricInfo {
        this['file_duplication_ratio'] = fileDuplicationRatio;
        return this;
    }
    public set fileDuplicationRatio(fileDuplicationRatio: string  | undefined) {
        this['file_duplication_ratio'] = fileDuplicationRatio;
    }
    public get fileDuplicationRatio(): string | undefined {
        return this['file_duplication_ratio'];
    }
    public withNonHfileDuplicationTotal(nonHfileDuplicationTotal: string): MetricInfo {
        this['non_hfile_duplication_total'] = nonHfileDuplicationTotal;
        return this;
    }
    public set nonHfileDuplicationTotal(nonHfileDuplicationTotal: string  | undefined) {
        this['non_hfile_duplication_total'] = nonHfileDuplicationTotal;
    }
    public get nonHfileDuplicationTotal(): string | undefined {
        return this['non_hfile_duplication_total'];
    }
    public withNonHfileDuplicationRatio(nonHfileDuplicationRatio: string): MetricInfo {
        this['non_hfile_duplication_ratio'] = nonHfileDuplicationRatio;
        return this;
    }
    public set nonHfileDuplicationRatio(nonHfileDuplicationRatio: string  | undefined) {
        this['non_hfile_duplication_ratio'] = nonHfileDuplicationRatio;
    }
    public get nonHfileDuplicationRatio(): string | undefined {
        return this['non_hfile_duplication_ratio'];
    }
    public withCodeDuplicationTotal(codeDuplicationTotal: string): MetricInfo {
        this['code_duplication_total'] = codeDuplicationTotal;
        return this;
    }
    public set codeDuplicationTotal(codeDuplicationTotal: string  | undefined) {
        this['code_duplication_total'] = codeDuplicationTotal;
    }
    public get codeDuplicationTotal(): string | undefined {
        return this['code_duplication_total'];
    }
    public withCodeDuplicationRatio(codeDuplicationRatio: string): MetricInfo {
        this['code_duplication_ratio'] = codeDuplicationRatio;
        return this;
    }
    public set codeDuplicationRatio(codeDuplicationRatio: string  | undefined) {
        this['code_duplication_ratio'] = codeDuplicationRatio;
    }
    public get codeDuplicationRatio(): string | undefined {
        return this['code_duplication_ratio'];
    }
    public withNonHfileCodeDuplicationTotal(nonHfileCodeDuplicationTotal: string): MetricInfo {
        this['non_hfile_code_duplication_total'] = nonHfileCodeDuplicationTotal;
        return this;
    }
    public set nonHfileCodeDuplicationTotal(nonHfileCodeDuplicationTotal: string  | undefined) {
        this['non_hfile_code_duplication_total'] = nonHfileCodeDuplicationTotal;
    }
    public get nonHfileCodeDuplicationTotal(): string | undefined {
        return this['non_hfile_code_duplication_total'];
    }
    public withNonHfileCodeDuplicationRatio(nonHfileCodeDuplicationRatio: string): MetricInfo {
        this['non_hfile_code_duplication_ratio'] = nonHfileCodeDuplicationRatio;
        return this;
    }
    public set nonHfileCodeDuplicationRatio(nonHfileCodeDuplicationRatio: string  | undefined) {
        this['non_hfile_code_duplication_ratio'] = nonHfileCodeDuplicationRatio;
    }
    public get nonHfileCodeDuplicationRatio(): string | undefined {
        return this['non_hfile_code_duplication_ratio'];
    }
    public withUnsafeFunctionsTotal(unsafeFunctionsTotal: string): MetricInfo {
        this['unsafe_functions_total'] = unsafeFunctionsTotal;
        return this;
    }
    public set unsafeFunctionsTotal(unsafeFunctionsTotal: string  | undefined) {
        this['unsafe_functions_total'] = unsafeFunctionsTotal;
    }
    public get unsafeFunctionsTotal(): string | undefined {
        return this['unsafe_functions_total'];
    }
    public withUnsafeFunctionsKloc(unsafeFunctionsKloc: string): MetricInfo {
        this['unsafe_functions_kloc'] = unsafeFunctionsKloc;
        return this;
    }
    public set unsafeFunctionsKloc(unsafeFunctionsKloc: string  | undefined) {
        this['unsafe_functions_kloc'] = unsafeFunctionsKloc;
    }
    public get unsafeFunctionsKloc(): string | undefined {
        return this['unsafe_functions_kloc'];
    }
    public withRedundantCodeTotal(redundantCodeTotal: string): MetricInfo {
        this['redundant_code_total'] = redundantCodeTotal;
        return this;
    }
    public set redundantCodeTotal(redundantCodeTotal: string  | undefined) {
        this['redundant_code_total'] = redundantCodeTotal;
    }
    public get redundantCodeTotal(): string | undefined {
        return this['redundant_code_total'];
    }
    public withRedundantCodeKloc(redundantCodeKloc: string): MetricInfo {
        this['redundant_code_kloc'] = redundantCodeKloc;
        return this;
    }
    public set redundantCodeKloc(redundantCodeKloc: string  | undefined) {
        this['redundant_code_kloc'] = redundantCodeKloc;
    }
    public get redundantCodeKloc(): string | undefined {
        return this['redundant_code_kloc'];
    }
    public withWarningSuppressionTotal(warningSuppressionTotal: string): MetricInfo {
        this['warning_suppression_total'] = warningSuppressionTotal;
        return this;
    }
    public set warningSuppressionTotal(warningSuppressionTotal: string  | undefined) {
        this['warning_suppression_total'] = warningSuppressionTotal;
    }
    public get warningSuppressionTotal(): string | undefined {
        return this['warning_suppression_total'];
    }
    public withWarningSuppressionKloc(warningSuppressionKloc: string): MetricInfo {
        this['warning_suppression_kloc'] = warningSuppressionKloc;
        return this;
    }
    public set warningSuppressionKloc(warningSuppressionKloc: string  | undefined) {
        this['warning_suppression_kloc'] = warningSuppressionKloc;
    }
    public get warningSuppressionKloc(): string | undefined {
        return this['warning_suppression_kloc'];
    }
}