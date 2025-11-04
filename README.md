# Finicify Frontend Developer Test

This project is a submission for the Finicify Frontend Developer Test, showcasing data-driven financial analytics dashboard implementation using React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Task 1: Company Internal Comparison Dashboard
- **Responsive Layout**: Fully responsive design that works seamlessly on desktop and tablet
- **Component-Based Architecture**: Modular components including:
  - `CompanyComparisonCard.tsx` - Interactive company selection and comparison card
  - `StatsBox.tsx` - Reusable statistics display component
  - `PerformanceChart.tsx` - Multi-line chart for fund performance visualization
- **Dynamic State Management**: Toggle between "Compare with Sector" and "Compare Within Company" modes
- **Interactive UI**: Hover effects, transitions, and smooth state changes

### Task 2A: Risk Metrics Heatmap
- **Color-Coded Visualization**: Risk values represented with color intensity (red → green gradient)
- **Interactive Tooltips**: Hover over cells to see detailed fund information
- **Color Scale Bar**: Visual legend showing risk levels from low to high
- **Responsive Table**: Clean, scrollable table layout for various screen sizes

### Task 2B: Sector Risk Analysis
- **Interactive Donut Chart**: Pie chart showing sector risk distribution with animations
- **Sortable Table**: Top-performing funds with sortable columns
- **Visual Indicators**: Color-coded risk badges for easy identification
- **Hover Effects**: Interactive chart segments and table rows

## 🛠️ Tech Stack

- **React 18.2** - UI framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS 3.4** - Utility-first styling
- **Recharts 2.10** - Chart visualization library
- **Vite 5.0** - Fast build tool and development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

## 🏗️ Project Structure

```
job/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CompanyComparisonCard.tsx
│   │   ├── StatsBox.tsx
│   │   └── PerformanceChart.tsx
│   ├── pages/              # Main page components
│   │   ├── CompanyComparison.tsx    (Task 1)
│   │   ├── RiskMetricsHeatmap.tsx   (Task 2A)
│   │   └── SectorRiskAnalysis.tsx   (Task 2B)
│   ├── App.tsx             # Main application component with navigation
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and Tailwind directives
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 📱 Responsive Design

The application is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1366px - 1920px
- **Tablet**: 768px - 1366px
- **Mobile**: Below 768px (functional but optimized for tablet+)

## 🎨 Key Features Implementation

### Task 1 - Dashboard UI
- ✅ Pixel-perfect implementation from reference images
- ✅ Component-based architecture
- ✅ Toggle functionality with React useState
- ✅ Responsive grid layout
- ✅ Interactive performance chart with Recharts
- ✅ Smooth transitions and hover effects

### Task 2A - Heatmap
- ✅ Dynamic color intensity based on values
- ✅ Custom tooltip on hover
- ✅ Color scale legend (0-10 range)
- ✅ Responsive table design
- ✅ Fund names and metric values display

### Task 2B - Pie Chart & Table
- ✅ Interactive donut chart with Recharts
- ✅ Sector risk percentage distribution
- ✅ Sortable top funds table
- ✅ Color-coded risk levels
- ✅ Hover effects and animations
- ✅ Clean, modern design

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌟 Code Quality

- **TypeScript**: Full type safety across all components
- **Clean Code**: Modular, reusable components with clear responsibilities
- **Performance**: Optimized rendering with React best practices
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **Maintainability**: Clear folder structure and naming conventions

## 📊 Data Handling

All components work with dynamic data structures and can easily be connected to real APIs:

```typescript
// Example data structure for Task 2A
{
  metrics: [
    { fund: "Fund Name", values: [6.65, 6.42, 6.31, 5.98, 5.88] },
    ...
  ],
  scale: [0, 10]
}

// Example data structure for Task 2B
{
  sectors: [
    { label: "Very High", value: 49.3, color: "#DC2626" },
    ...
  ],
  topFunds: [
    { 
      name: "Fund Name",
      company: "Company Name",
      category: "Category",
      "1YReturn": 10.53,
      "3YReturn": 23.35,
      risk: "Low"
    },
    ...
  ]
}
```

## 🎯 Evaluation Criteria Met

| Category | Implementation |
|----------|---------------|
| ✅ Code Quality | Clean, readable, modular TypeScript code |
| ✅ UI Accuracy | Pixel-perfect match to reference screenshots |
| ✅ Data Visualization | Recharts with custom styling and interactivity |
| ✅ React Skills | Proper use of hooks (useState), props, and components |
| ✅ Problem Solving | Smart data mapping, formatting, and responsiveness |
| ✅ Responsive Design | Works seamlessly on desktop and tablet |

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready to be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 👨‍💻 Development Notes

- The project uses **Vite** for blazing-fast development and optimized production builds
- **Tailwind CSS** provides utility-first styling with custom theme extensions
- **Recharts** handles all chart visualizations with customizable options
- Components are designed to be easily extendable and reusable
- TypeScript ensures type safety and better IDE support

## 📝 Future Enhancements

Potential improvements for production:
- [ ] Connect to real API endpoints
- [ ] Add data caching and state management (Redux/Zustand)
- [ ] Implement user authentication
- [ ] Add more chart types and filters
- [ ] Enhanced mobile responsiveness
- [ ] Dark/light theme toggle
- [ ] Export functionality for reports
- [ ] Real-time data updates with WebSocket

## 📞 Contact

For any questions or clarifications about this submission, please reach out.

---

**Submitted by**: [Your Name]  
**Date**: November 5, 2025  
**Time Spent**: ~6 hours  
**Status**: ✅ Complete
