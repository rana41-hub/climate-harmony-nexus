
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { AirVent, Database, Thermometer, Building, Factory, Home } from "lucide-react";

const deviceTypes = [
  {
    id: 'residential',
    name: 'Residential',
    icon: <Home className="h-5 w-5" />,
    description: 'Home cooling and CO₂ capture units'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: <Building className="h-5 w-5" />,
    description: 'Office and retail space systems'
  },
  {
    id: 'industrial',
    name: 'Industrial',
    icon: <Factory className="h-5 w-5" />,
    description: 'Large-scale industrial implementations'
  }
];

const residentialDevices = [
  {
    id: 1,
    name: 'HC² Compact Home',
    location: 'Living Room',
    status: 'online',
    temperature: 22,
    co2CaptureRate: 0.4,
    efficiency: 93,
    lastMaintenance: '2025-02-15',
    nextMaintenance: '2025-07-15'
  },
  {
    id: 2,
    name: 'HC² Outdoor Unit',
    location: 'Garden',
    status: 'online',
    temperature: 24,
    co2CaptureRate: 0.6,
    efficiency: 89,
    lastMaintenance: '2025-03-01',
    nextMaintenance: '2025-08-01'
  }
];

const commercialDevices = [
  {
    id: 3,
    name: 'HC² Office Max',
    location: 'Main Office Building',
    status: 'online',
    temperature: 21,
    co2CaptureRate: 1.2,
    efficiency: 91,
    lastMaintenance: '2025-03-10',
    nextMaintenance: '2025-08-10'
  },
  {
    id: 4,
    name: 'HC² Retail',
    location: 'Shopping Center',
    status: 'maintenance',
    temperature: 23,
    co2CaptureRate: 0.9,
    efficiency: 78,
    lastMaintenance: '2025-01-25',
    nextMaintenance: '2025-04-10'
  }
];

const industrialDevices = [
  {
    id: 5,
    name: 'HC² Industrial Plus',
    location: 'Manufacturing Plant',
    status: 'online',
    temperature: 19,
    co2CaptureRate: 4.7,
    efficiency: 94,
    lastMaintenance: '2025-03-20',
    nextMaintenance: '2025-08-20'
  },
  {
    id: 6,
    name: 'HC² Industrial Max',
    location: 'Chemical Factory',
    status: 'offline',
    temperature: 0,
    co2CaptureRate: 0,
    efficiency: 0,
    lastMaintenance: '2025-02-05',
    nextMaintenance: '2025-05-05'
  }
];

const deviceMap = {
  residential: residentialDevices,
  commercial: commercialDevices,
  industrial: industrialDevices
};

const Devices = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [devices, setDevices] = useState(deviceMap[activeTab as keyof typeof deviceMap]);
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);
  const [powerSettings, setPowerSettings] = useState({
    coolingPower: 70,
    co2CapturePower: 80,
    aiOptimization: true
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setDevices(deviceMap[value as keyof typeof deviceMap]);
    setSelectedDevice(deviceMap[value as keyof typeof deviceMap][0]);
  };

  const handleDeviceSelect = (device: any) => {
    setSelectedDevice(device);
    // Reset power settings based on selected device
    setPowerSettings({
      coolingPower: device.status === 'online' ? 70 : 0,
      co2CapturePower: device.status === 'online' ? 80 : 0,
      aiOptimization: device.status === 'online'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-eco-green';
      case 'offline':
        return 'bg-destructive';
      case 'maintenance':
        return 'bg-amber-500';
      default:
        return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Active';
      case 'offline':
        return 'Offline';
      case 'maintenance':
        return 'Maintenance';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Devices</h1>
          <p className="text-foreground/70">Manage and monitor your Hybrid Cooling & CO₂ Capture units</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Device Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Device Categories</CardTitle>
                <CardDescription>Select a category to view devices</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                  <TabsList className="grid grid-cols-3 mb-6">
                    {deviceTypes.map((type) => (
                      <TabsTrigger key={type.id} value={type.id}>
                        {type.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {deviceTypes.map((type) => (
                    <TabsContent key={type.id} value={type.id} className="mt-0">
                      <div className="flex items-center mb-4">
                        {type.icon}
                        <div className="ml-2">
                          <h3 className="font-medium">{type.name}</h3>
                          <p className="text-xs text-foreground/70">{type.description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        {deviceMap[type.id as keyof typeof deviceMap].map((device) => (
                          <div
                            key={device.id}
                            className={`p-3 border rounded-md cursor-pointer hover:bg-muted/50 transition-colors ${
                              selectedDevice.id === device.id ? 'border-primary bg-muted/50' : ''
                            }`}
                            onClick={() => handleDeviceSelect(device)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{device.name}</h4>
                              <div className="flex items-center">
                                <div className={`w-2 h-2 rounded-full ${getStatusColor(device.status)} mr-2`}></div>
                                <span className="text-xs">{getStatusText(device.status)}</span>
                              </div>
                            </div>
                            <p className="text-xs text-foreground/70">{device.location}</p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-eco hover:opacity-90">
                  Add New Device
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Right Column - Device Details and Controls */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{selectedDevice.name}</CardTitle>
                    <CardDescription>{selectedDevice.location}</CardDescription>
                  </div>
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedDevice.status)} mr-2`}></div>
                    <span>{getStatusText(selectedDevice.status)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Thermometer className="h-4 w-4 mr-2 text-eco-blue" />
                        Temperature
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {selectedDevice.status === 'online' ? `${selectedDevice.temperature}°C` : '--'}
                      </div>
                      <p className="text-xs text-foreground/70">Current cooling output</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Database className="h-4 w-4 mr-2 text-eco-green" />
                        CO₂ Capture
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {selectedDevice.status === 'online' ? `${selectedDevice.co2CaptureRate} kg/hr` : '--'}
                      </div>
                      <p className="text-xs text-foreground/70">Current capture rate</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <AirVent className="h-4 w-4 mr-2 text-eco-teal" />
                        Efficiency
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {selectedDevice.status === 'online' ? `${selectedDevice.efficiency}%` : '--'}
                      </div>
                      <p className="text-xs text-foreground/70">Overall efficiency</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">Cooling Power</label>
                      <span className="text-sm">{powerSettings.coolingPower}%</span>
                    </div>
                    <Slider
                      value={[powerSettings.coolingPower]}
                      min={0}
                      max={100}
                      step={1}
                      disabled={selectedDevice.status !== 'online'}
                      onValueChange={(value) => setPowerSettings({...powerSettings, coolingPower: value[0]})}
                      className="mb-6"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium">CO₂ Capture Rate</label>
                      <span className="text-sm">{powerSettings.co2CapturePower}%</span>
                    </div>
                    <Slider
                      value={[powerSettings.co2CapturePower]}
                      min={0}
                      max={100}
                      step={1}
                      disabled={selectedDevice.status !== 'online'}
                      onValueChange={(value) => setPowerSettings({...powerSettings, co2CapturePower: value[0]})}
                      className="mb-6"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">AI Optimization</p>
                      <p className="text-xs text-foreground/70">Let AI manage and optimize system settings</p>
                    </div>
                    <Switch
                      checked={powerSettings.aiOptimization}
                      disabled={selectedDevice.status !== 'online'}
                      onCheckedChange={(checked) => setPowerSettings({...powerSettings, aiOptimization: checked})}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Maintenance History</Button>
                <Button disabled={selectedDevice.status !== 'online'}>Apply Settings</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground/70">Model</p>
                      <p className="font-medium">{selectedDevice.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Installation Location</p>
                      <p className="font-medium">{selectedDevice.location}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground/70">Last Maintenance</p>
                      <p className="font-medium">{selectedDevice.lastMaintenance}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Next Scheduled Maintenance</p>
                      <p className="font-medium">{selectedDevice.nextMaintenance}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-foreground/70">Device Status</p>
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(selectedDevice.status)} mr-2`}></div>
                      <p className="font-medium">{getStatusText(selectedDevice.status)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">View Details</Button>
                <Button variant="outline" className="text-destructive">Reset Device</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
