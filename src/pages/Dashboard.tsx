
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleArrowDown, CircleArrowUp, Database, Thermometer, Wind, Sun, CloudSnow, Zap } from "lucide-react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";

// Sample data for charts
const temperatureData = [
  { time: '00:00', indoor: 24, outdoor: 27, cooling: 22 },
  { time: '03:00', indoor: 23, outdoor: 26, cooling: 21 },
  { time: '06:00', indoor: 23, outdoor: 25, cooling: 21 },
  { time: '09:00', indoor: 25, outdoor: 29, cooling: 22 },
  { time: '12:00', indoor: 27, outdoor: 32, cooling: 23 },
  { time: '15:00', indoor: 28, outdoor: 33, cooling: 24 },
  { time: '18:00', indoor: 26, outdoor: 30, cooling: 23 },
  { time: '21:00', indoor: 25, outdoor: 28, cooling: 22 },
];

const co2Data = [
  { time: '00:00', captureRate: 0.7, storageLevel: 64 },
  { time: '03:00', captureRate: 0.6, storageLevel: 67 },
  { time: '06:00', captureRate: 0.5, storageLevel: 69 },
  { time: '09:00', captureRate: 0.8, storageLevel: 72 },
  { time: '12:00', captureRate: 1.2, storageLevel: 77 },
  { time: '15:00', captureRate: 1.3, storageLevel: 82 },
  { time: '18:00', captureRate: 1.0, storageLevel: 85 },
  { time: '21:00', captureRate: 0.8, storageLevel: 88 },
];

const energyData = [
  { time: '00:00', solar: 0, wind: 0.3, consumption: 0.2 },
  { time: '03:00', solar: 0, wind: 0.2, consumption: 0.2 },
  { time: '06:00', solar: 0.1, wind: 0.3, consumption: 0.3 },
  { time: '09:00', solar: 0.8, wind: 0.4, consumption: 0.5 },
  { time: '12:00', solar: 1.2, wind: 0.3, consumption: 0.7 },
  { time: '15:00', solar: 1.0, wind: 0.5, consumption: 0.8 },
  { time: '18:00', solar: 0.6, wind: 0.4, consumption: 0.6 },
  { time: '21:00', solar: 0.1, wind: 0.3, consumption: 0.4 },
];

const performanceMetrics = [
  {
    id: 1,
    title: "Temperature Reduction",
    icon: <CircleArrowDown className="h-5 w-5 text-eco-blue" />,
    value: "6.5°C",
    change: "+0.3°C",
    trend: "up",
    info: "Average cooling effect vs ambient",
  },
  {
    id: 2,
    title: "CO₂ Captured Today",
    icon: <Database className="h-5 w-5 text-eco-green" />,
    value: "5.2 kg",
    change: "+0.8 kg",
    trend: "up",
    info: "Compared to yesterday",
  },
  {
    id: 3,
    title: "Energy Production",
    icon: <Zap className="h-5 w-5 text-eco-teal" />,
    value: "3.4 kWh",
    change: "+15%",
    trend: "up",
    info: "Solar and wind combined",
  },
  {
    id: 4,
    title: "System Efficiency",
    icon: <CloudSnow className="h-5 w-5 text-eco-blue" />,
    value: "92%",
    change: "+2%",
    trend: "up",
    info: "Overall system performance",
  },
];

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('day');

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">System Dashboard</h1>
            <p className="text-foreground/70">Monitor and control your Hybrid Cooling & CO₂ Capture Machine</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Tabs defaultValue="day" value={timeRange} onValueChange={setTimeRange} className="w-full">
              <TabsList>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Performance Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {performanceMetrics.map((metric) => (
            <Card key={metric.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  {metric.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className={`flex items-center text-xs ${
                  metric.trend === 'up' ? 'text-eco-green' : 'text-destructive'
                }`}>
                  <span>{metric.change}</span>
                  <CircleArrowUp className={`h-3 w-3 ml-1 ${
                    metric.trend === 'down' && 'rotate-180'
                  }`} />
                </div>
                <p className="text-xs text-foreground/70 mt-1">{metric.info}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Temperature Chart */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Temperature Monitoring</CardTitle>
                  <CardDescription>Indoor vs outdoor temperature</CardDescription>
                </div>
                <Thermometer className="h-5 w-5 text-eco-blue" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="time" />
                    <YAxis unit="°C" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="indoor" 
                      name="Indoor Temp" 
                      stroke="#10B981" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 6 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="outdoor" 
                      name="Outdoor Temp" 
                      stroke="#F97316" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 6 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="cooling" 
                      name="Cooling Output" 
                      stroke="#0EA5E9" 
                      strokeWidth={2} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 6 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* CO2 Capture Chart */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>CO₂ Capture Performance</CardTitle>
                  <CardDescription>Capture rate and storage level</CardDescription>
                </div>
                <Database className="h-5 w-5 text-eco-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={co2Data}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="time" />
                    <YAxis yAxisId="left" orientation="left" unit=" kg/h" />
                    <YAxis yAxisId="right" orientation="right" unit="%" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Area 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="captureRate" 
                      name="CO₂ Capture Rate" 
                      stroke="#10B981" 
                      fill="#10B981" 
                      fillOpacity={0.2} 
                      strokeWidth={2}
                    />
                    <Area 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="storageLevel" 
                      name="Storage Level" 
                      stroke="#0EA5E9" 
                      fill="#0EA5E9" 
                      fillOpacity={0.2}
                      strokeWidth={2} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Energy Production & Consumption */}
          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Energy Balance</CardTitle>
                  <CardDescription>Production vs consumption</CardDescription>
                </div>
                <Zap className="h-5 w-5 text-eco-teal" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="time" />
                    <YAxis unit=" kWh" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="solar" 
                      name="Solar Production" 
                      stackId="production" 
                      fill="#F59E0B" 
                    />
                    <Bar 
                      dataKey="wind" 
                      name="Wind Production" 
                      stackId="production" 
                      fill="#10B981" 
                    />
                    <Bar 
                      dataKey="consumption" 
                      name="System Consumption" 
                      fill="#0EA5E9" 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* System Status Card */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current operational metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
                    <span>Cooling System</span>
                  </div>
                  <span className="font-medium">Active - 75% Capacity</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
                    <span>CO₂ Capture</span>
                  </div>
                  <span className="font-medium">Active - 88% Efficiency</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
                    <span>Solar Production</span>
                  </div>
                  <span className="font-medium">Active - 0.8 kWh/h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
                    <span>Wind Production</span>
                  </div>
                  <span className="font-medium">Active - 0.4 kWh/h</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
                    <span>Battery Storage</span>
                  </div>
                  <span className="font-medium">65% Charged</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-eco-green mr-2"></div>
                    <span>AI Optimization</span>
                  </div>
                  <span className="font-medium">Enhanced Mode - Active</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-between w-full">
                <p className="text-sm text-foreground/70">Last update: 5 minutes ago</p>
                <Button variant="outline" size="sm">Detailed View</Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-end mb-8">
          <Button>
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
