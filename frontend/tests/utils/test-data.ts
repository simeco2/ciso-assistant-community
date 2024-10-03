export default {
	assessmentName: 'Test assessment',
	assetName: 'Test asset',
	evidenceName: 'Test evidence',
	folderName: 'Test domain',
	projectName: 'Test project',
	riskAcceptanceName: 'Test risk acceptance',
	riskAssessmentName: 'Test risk assessment',
	riskAssessmentVersion: '1.4.2',
	riskAssessmentVersion2: '1.4.3',
	riskScenarioName: 'Test risk scenario',
	referenceControlName: 'Test reference control',
	appliedControlName: 'Test applied control',
	threatName: 'Test threat',
	description: 'Test description',
	file: new URL('../utils/test_image.jpg', import.meta.url).pathname,
	file2: new URL('../utils/test_file.txt', import.meta.url).pathname,
	user: {
		email: 'User@tests.com',
		password: 'pass123wordTest',
		firstName: 'Test',
		lastName: 'User'
	},
	usergroups: {
		// this lists needs to be updated when updating permissions in apps.py in order to avoid test failures
		analyst: {
			name: 'Analyst',
			perms: [
				'add_appliedcontrol',
				'add_asset',
				'add_complianceassessment',
				'add_evidence',
				'add_policy',
				'add_project',
				'add_riskacceptance',
				'add_riskassessment',
				'add_riskscenario',
				'add_solution',
				'add_threat',
				'change_appliedcontrol',
				'change_asset',
				'change_complianceassessment',
				'change_entity',
				'change_entityassessment',
				'change_evidence',
				'change_policy',
				'change_project',
				'change_referencecontrol',
				'change_representative',
				'change_requirementassessment',
				'change_riskacceptance',
				'change_riskassessment',
				'change_riskscenario',
				'change_solution',
				'change_threat',
				'delete_appliedcontrol',
				'delete_asset',
				'delete_complianceassessment',
				'delete_entity',
				'delete_entityassessment',
				'delete_evidence',
				'delete_policy',
				'delete_project',
				'delete_referencecontrol',
				'delete_representative',
				'delete_riskacceptance',
				'delete_riskassessment',
				'delete_riskscenario',
				'delete_solution',
				'delete_threat',
				'view_appliedcontrol',
				'view_asset',
				'view_complianceassessment',
				'view_entity',
				'view_entityassessment',
				'view_evidence',
				'view_folder',
				'view_framework',
				'view_loadedlibrary',
				'view_policy',
				'view_project',
				'view_referencecontrol',
				'view_representative',
				'view_requirementassessment',
				'view_requirementmapping',
				'view_requirementmappingset',
				'view_requirementnode',
				'view_riskacceptance',
				'view_riskassessment',
				'view_riskmatrix',
				'view_riskscenario',
				'view_solution',
				'view_storedlibrary',
				'view_threat',
				'view_user',
				'view_usergroup'
			]
		},
		reader: {
			name: 'Reader',
			perms: [
				'view_appliedcontrol',
				'view_asset',
				'view_complianceassessment',
				'view_entity',
				'view_entityassessment',
				'view_evidence',
				'view_folder',
				'view_framework',
				'view_loadedlibrary',
				'view_policy',
				'view_project',
				'view_referencecontrol',
				'view_representative',
				'view_requirementassessment',
				'view_requirementmapping',
				'view_requirementmappingset',
				'view_requirementnode',
				'view_riskacceptance',
				'view_riskassessment',
				'view_riskmatrix',
				'view_riskscenario',
				'view_solution',
				'view_storedlibrary',
				'view_threat',
				'view_user',
				'view_usergroup'
			]
		},
		domainManager: {
			name: 'Domain manager',
			perms: [
				'add_appliedcontrol',
				'add_asset',
				'add_complianceassessment',
				'add_entity',
				'add_entityassessment',
				'add_evidence',
				'add_folder',
				'add_policy',
				'add_project',
				'add_riskacceptance',
				'add_riskassessment',
				'add_riskmatrix',
				'add_riskscenario',
				'add_solution',
				'add_threat',
				'change_appliedcontrol',
				'change_asset',
				'change_complianceassessment',
				'change_entity',
				'change_entityassessment',
				'change_evidence',
				'change_folder',
				'change_policy',
				'change_project',
				'change_referencecontrol',
				'change_representative',
				'change_requirementassessment',
				'change_riskacceptance',
				'change_riskassessment',
				'change_riskmatrix',
				'change_riskscenario',
				'change_solution',
				'change_threat',
				'delete_appliedcontrol',
				'delete_asset',
				'delete_complianceassessment',
				'delete_entity',
				'delete_entityassessment',
				'delete_evidence',
				'delete_folder',
				'delete_policy',
				'delete_project',
				'delete_referencecontrol',
				'delete_representative',
				'delete_riskacceptance',
				'delete_riskassessment',
				'delete_riskmatrix',
				'delete_riskscenario',
				'delete_solution',
				'delete_threat',
				'view_appliedcontrol',
				'view_asset',
				'view_complianceassessment',
				'view_entity',
				'view_entityassessment',
				'view_evidence',
				'view_folder',
				'view_framework',
				'view_loadedlibrary',
				'view_policy',
				'view_project',
				'view_referencecontrol',
				'view_representative',
				'view_requirementassessment',
				'view_requirementmapping',
				'view_requirementmappingset',
				'view_requirementnode',
				'view_riskacceptance',
				'view_riskassessment',
				'view_riskmatrix',
				'view_riskscenario',
				'view_solution',
				'view_storedlibrary',
				'view_threat',
				'view_user',
				'view_usergroup'
			]
		},
		approver: {
			name: 'Approver',
			perms: [
				'view_project',
				'view_riskassessment',
				'view_appliedcontrol',
				'view_policy',
				'view_riskscenario',
				'view_riskacceptance',
				'approve_riskacceptance',
				'view_asset',
				'view_threat',
				'view_referencecontrol',
				'view_folder',
				'view_usergroup',
				'view_riskmatrix',
				'view_complianceassessment',
				'view_requirementassessment',
				'view_requirementnode',
				'view_evidence',
				'view_framework',
				'view_storedlibrary',
				'view_loadedlibrary',
				'view_user',
				'view_requirementmappingset',
				'view_requirementmapping'
			]
		}
	},
	framework: {
		name: 'NIST CSF v1.1',
		ref: 'NIST-CSF-1.1',
		urn: 'urn:intuitem:risk:library:nist-csf-1.1'
	},
	matrix: {
		name: 'Critical risk matrix 5x5',
		displayName: 'critical 5x5',
		urn: 'urn:intuitem:risk:library:critical_risk_matrix_5x5'
	},
	referenceControl: {
		name: 'POL.PHYSICAL - Physical security policy',
		category: 'policy',
		csf_function: 'govern',
		library: {
			name: 'Documents and policies',
			ref: 'doc-pol',
			urn: 'urn:intuitem:risk:library:doc-pol'
		},
		urn: 'urn:intuitem:risk:function:POL.PHYSICAL'
	},
	referenceControl2: {
		name: 'DOC.CONTROLS - Controls accountability matrix',
		category: 'process',
		csf_function: 'protect',
		library: {
			name: 'Documents and policies',
			ref: 'doc-pol',
			urn: 'urn:intuitem:risk:library:doc-pol'
		},
		urn: 'urn:intuitem:risk:function:DOC.CONTROLS'
	},
	threat: {
		name: 'T1011 - Exfiltration Over Other Network Medium',
		library: {
			name: 'Mitre ATT&CK v14 - Threats and mitigations',
			ref: 'mitre-attack',
			urn: 'urn:intuitem:risk:library:mitre-attack-v14'
		},
		urn: 'urn:intuitem:risk:threat:mitre-attack:T1011'
	},
	threat2: {
		name: 'T1052 - Exfiltration Over Physical Medium',
		library: {
			name: 'Mitre ATT&CK v14 - Threats and mitigations',
			ref: 'mitre-attack',
			urn: 'urn:intuitem:risk:library:mitre-attack-v14'
		},
		urn: 'urn:intuitem:risk:threat:mitre-attack:T1052'
	},
	requirement_assessment: {
		name: 'RC.RP - Recovery Planning',
		library: {
			name: 'NIST CSF v1.1',
			ref: 'NIST-CSF-1.1',
			urn: 'urn:intuitem:risk:library:nist-csf-1.1'
		}
	},
	requirement_assessment2: {
		name: 'ID.GV - Governance',
		library: {
			name: 'NIST CSF v1.1',
			ref: 'NIST-CSF-1.1',
			urn: 'urn:intuitem:risk:library:nist-csf-1.1'
		}
	}
} as { [key: string]: any };
