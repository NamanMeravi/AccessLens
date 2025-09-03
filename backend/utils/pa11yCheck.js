import pa11y from "pa11y";


export const runAccessibilityCheck = async (url) => {
  try {
    const results = await pa11y(url);

    // Extract only messages from issues
    const issues = results.issues.map(issue => issue.message);

    return {
      documentTitle: results.documentTitle,
      pageUrl: results.pageUrl,
      issues
    };
  } catch (error) {
    throw new Error("Accessibility check failed: " + error.message);
  }
};