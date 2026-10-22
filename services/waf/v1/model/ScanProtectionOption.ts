import { DirectoryTraversalProtectionConfig } from './DirectoryTraversalProtectionConfig';
import { HighFrequencyScanBlockingConfig } from './HighFrequencyScanBlockingConfig';


export class ScanProtectionOption {
    private 'high_frequency_scan_blocking_config'?: HighFrequencyScanBlockingConfig;
    private 'directory_traversal_protection_config'?: DirectoryTraversalProtectionConfig;
    public constructor() { 
    }
    public withHighFrequencyScanBlockingConfig(highFrequencyScanBlockingConfig: HighFrequencyScanBlockingConfig): ScanProtectionOption {
        this['high_frequency_scan_blocking_config'] = highFrequencyScanBlockingConfig;
        return this;
    }
    public set highFrequencyScanBlockingConfig(highFrequencyScanBlockingConfig: HighFrequencyScanBlockingConfig  | undefined) {
        this['high_frequency_scan_blocking_config'] = highFrequencyScanBlockingConfig;
    }
    public get highFrequencyScanBlockingConfig(): HighFrequencyScanBlockingConfig | undefined {
        return this['high_frequency_scan_blocking_config'];
    }
    public withDirectoryTraversalProtectionConfig(directoryTraversalProtectionConfig: DirectoryTraversalProtectionConfig): ScanProtectionOption {
        this['directory_traversal_protection_config'] = directoryTraversalProtectionConfig;
        return this;
    }
    public set directoryTraversalProtectionConfig(directoryTraversalProtectionConfig: DirectoryTraversalProtectionConfig  | undefined) {
        this['directory_traversal_protection_config'] = directoryTraversalProtectionConfig;
    }
    public get directoryTraversalProtectionConfig(): DirectoryTraversalProtectionConfig | undefined {
        return this['directory_traversal_protection_config'];
    }
}