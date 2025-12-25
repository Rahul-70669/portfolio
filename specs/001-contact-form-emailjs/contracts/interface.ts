export interface EmailJSTemplateParams extends Record<string, unknown> {
  from_name: string;    // Maps to 'name' field
  from_email: string;   // Maps to 'email' field
  subject?: string;     // Maps to 'subject' field
  message: string;      // Maps to 'message' field
  to_name: string;      // Hardcoded in template or passed (e.g., 'Arjun')
}

// Contract for the Environment Variables
export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
