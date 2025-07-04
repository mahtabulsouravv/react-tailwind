import { Layout } from "@/components/Layout";
import { Collapsible } from "@/components/Collapsible";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const blogs = [
  {
    title: "Understanding AI Agents",
    content: `
### What is an AI Agent?

An AI Agent is a system that can perceive its environment, reason about it, and take actions to achieve a goal.

**Key Features:**

- Autonomous decision making
- Interacts with APIs or users
- Learns from data

\`\`\`python
# Example pseudocode for AI Agent behavior
def act(environment):
    perception = environment.observe()
    action = decide(perception)
    environment.perform(action)
\`\`\`
    `,
  },
  {
    title: "Building Cross-Platform Apps with PyQt",
    content: `
### Why PyQt?

PyQt enables you to build desktop apps that run on Windows, macOS, and Linux using Python.

**Benefits:**

- Native look & feel
- Powerful UI components
- Easy to package

\`\`\`python
from PyQt5.QtWidgets import QApplication, QWidget

app = QApplication([])
window = QWidget()
window.setWindowTitle('Hello PyQt')
window.show()
app.exec_()
\`\`\`
    `,
  },
];

// CodeBlock component with copy button and styled for oneDark theme
function CodeBlock({ language, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative group rounded-md overflow-hidden border border-border">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        PreTag="div"
        customStyle={{ margin: 0, paddingTop: "1rem", paddingBottom: "1rem", fontSize: "0.9rem" }}
      >
        {value}
      </SyntaxHighlighter>

      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-xs px-2 py-1 rounded select-none transition-opacity
          ${copied
            ? "bg-green-600 text-green-100"
            : "bg-gray-900 bg-opacity-90 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export const BlogPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <Layout>
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            <span className="text-primary">Blog</span> Insights
          </h2>

          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <Collapsible
                key={index}
                title={blog.title}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="prose prose-invert max-w-none text-muted-foreground text-left">
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        const code = String(children).replace(/\n$/, "");

                        return !inline && match ? (
                          <CodeBlock language={match[1]} value={code} />
                        ) : (
                          <code
                            className="bg-gray-700 rounded px-1 py-0.5"
                            {...props}
                          >
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {blog.content}
                  </ReactMarkdown>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
