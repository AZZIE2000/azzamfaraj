"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./grid.module.scss";
import {
  WidthProvider,
  ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next";
import { heights, layouts } from "@/data";
import ThemeToggle from "../theme-toggle";
import BlurFade from "../magic-ui/blur-fade";
import {
  TextMarqueeCard,
  MyTechCard,
  JobsCard,
  AboutCard,
  MapCard,
  ResumeCard,
  IconCard,
  StationUICard,
  PoSystem,
  StationSetupCard,
  AllianceLandingCard,
  StationLandingCard,
  DeveloperLandingCard,
  Project2,
} from "@/components/cards";
import GooeyNav from "../GooeyNav";
import Squares from "../Squares";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Grid = () => {
  const [height, setHeight] = useState(280);
  const [isMounted, setMounted] = useState(false);
  const [layout, setLayout] = useState<any>(layouts.all);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);
  const items = [
    { label: "Home", id: "all" },
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-8">
        <GooeyNav
          onClick={(id: "all" | "about" | "work") => {
            setLayout(layouts[id] as any);
          }}
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div className={styles.container}>
        <ResponsiveGridLayout
          useCSSTransforms
          className={styles.layout}
          layouts={layout}
          breakpoints={{
            lg: 1199,
            md: 799,
            sm: 374,
          }}
          cols={{
            lg: 12,
            md: 10,
            sm: 4,
          }}
          isDraggable={false}
          rowHeight={height}
          onBreakpointChange={(breakpoint: any) => {
            setHeight(heights[breakpoint]);
          }}
          margin={[16, 16]}
        >
          <div
            key="bio"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
              height: "100%",
            }}
          >
            <BlurFade delay={0.01}>
              <AboutCard />
            </BlurFade>
          </div>
          <div
            key="theme-toggle"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <div className="flex flex-col-reverse sm:flex-col gap-3 h-full">
              <BlurFade delay={0.1}>
                <ResumeCard />
              </BlurFade>
              {/* <BlurFade delay={0.12}>
                <ThemeToggle />
              </BlurFade> */}
            </div>
          </div>
          <div
            key="map"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.08}>
              <MapCard />
            </BlurFade>
          </div>
          <div
            key="text-marquee"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.04}>
              <TextMarqueeCard />
            </BlurFade>
          </div>
          <div
            key="linkedin"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.24}>
              <IconCard
                title="Linkedin"
                link="https://www.linkedin.com/in/azzam-faraj/"
              />
            </BlurFade>
          </div>
          <div
            key="github"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.26}>
              <IconCard title="Github" link="https://github.com/AZZIE2000" />
            </BlurFade>
          </div>
          <div
            key="DEV"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.28}>
              <IconCard title="DEV" link="https://dev.to/azzam_faraj" />
            </BlurFade>
          </div>
          <div
            key="email"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.3}>
              <IconCard title="Email" link="mailto:azzam.faraj0@gmail.com" />
            </BlurFade>
          </div>
          <div
            key="my-stack"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "500ms" : "0ms",
            }}
          >
            <BlurFade delay={0.35}>
              <MyTechCard />
            </BlurFade>
          </div>
          <div
            key="jobs"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.4}>
              <JobsCard />
            </BlurFade>
          </div>
          {/* Projects */}
          <div
            key="po-system"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.5}>
              <PoSystem />
            </BlurFade>
          </div>
          <div
            key="tbd"
            className={cn(styles.itemGrab, styles.item)}
            style={{
              transitionDuration: isMounted ? "700ms" : "0ms",
            }}
          >
            <BlurFade delay={0.5}>
              <Project2 />
            </BlurFade>
          </div>
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default Grid;
