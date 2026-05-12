const data = {
  Python: {
    icon: "🐍",
    qa: [
      {
        q: "What are Python Data Types?",
        theory: "Python has built-in data types like int, float, list, tuple, dict, set, bool and more.",
        code: `x = 10
print(type(x))`
      },
      {
        q: "What are Lists and List Operations?",
        theory: "Lists are ordered mutable collections.",
        code: `fruits = ["apple", "banana"]
fruits.append("mango")
print(fruits)`
      },
      {
        q: "What are Loops in Python?",
        theory: "Loops repeat code execution.",
        code: `for i in range(5):
    print(i)`
      }
    ]
  },

  SQL: {
    icon: "🗄️",
    qa: [
      {
        q: "What is SQL?",
        theory: "SQL is used to manage relational databases.",
        code: `SELECT * FROM employees;`
      },
      {
        q: "What are JOINs?",
        theory: "JOIN combines rows from multiple tables.",
        code: `SELECT * FROM employees
INNER JOIN departments
ON employees.dept_id = departments.id;`
      }
    ]
  },

  Zoho: {
    icon: "⚡",
    qa: [
      {
        q: "What is Zoho CRM?",
        theory: "Zoho CRM manages leads, contacts, deals and sales pipelines.",
        code: `Lead → Contact → Deal`
      },
      {
        q: "What are Zoho Workflows?",
        theory: "Workflows automate actions based on triggers and conditions.",
        code: `Trigger → Condition → Action`
      }
    ]
  }
};

const tabs = ["Python", "SQL", "Zoho"];

let activeTab = "Python";

function renderApp() {
  const topic = data[activeTab];

  document.getElementById("app").innerHTML = `
    <div class="header">
      <div class="container">
        <div class="title">Interview Q&A Prep</div>
        <div class="subtitle">PYTHON · SQL · ZOHO PRODUCTS</div>

        <div class="tabs">
          ${tabs.map(tab => `
            <button class="tab-btn" onclick="changeTab('${tab}')">
              ${data[tab].icon} ${tab}
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="main">
      <div class="progress-box">
        <strong>${activeTab}</strong> Questions: ${topic.qa.length}
      </div>

      <div class="qa-list">
        ${topic.qa.map((item, i) => `
          <div class="qa-card">
            <div class="qa-header" onclick="toggleAnswer(${i})">
              <div class="question">Q${i + 1}. ${item.q}</div>
            </div>

            <div class="answer" id="answer-${i}">
              <div class="theory-block">
                ${item.theory}
              </div>

              <button class="code-btn" onclick="toggleCode(event, ${i})">
                Show Code
              </button>

              <div class="code-block" id="code-${i}">
${item.code}
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="footer-tip">
        Click question to expand · Show Code for examples
      </div>
    </div>
  `;
}

function changeTab(tab) {
  activeTab = tab;
  renderApp();
}

function toggleAnswer(i) {
  const ans = document.getElementById(`answer-${i}`);

  if (ans.style.display === "block") {
    ans.style.display = "none";
  } else {
    ans.style.display = "block";
  }
}

function toggleCode(event, i) {
  event.stopPropagation();

  const code = document.getElementById(`code-${i}`);

  if (code.style.display === "block") {
    code.style.display = "none";
  } else {
    code.style.display = "block";
  }
}

renderApp();
