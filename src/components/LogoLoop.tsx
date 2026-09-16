import React, { useMemo, memo } from 'react';
import './LogoLoop.css';

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

export interface LogoItem {
  node?: React.ReactNode;
  src?: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: string | number) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LogoLoop: React.FC<LogoLoopProps> = memo(
  ({
    logos,
    speed = 70,
    direction = 'left',
    width = '100%',
    logoHeight = 32,
    gap = 48,
    pauseOnHover = true,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Marcas oficiales',
    className,
    style,
  }) => {
    // Calculate duration based on number of brands and speed
    const duration = useMemo(() => {
      const estimatedWidthPerItem = 150 + gap;
      const totalWidth = logos.length * estimatedWidthPerItem;
      const effectiveSpeed = Math.max(25, Math.abs(speed));
      return Math.round(totalWidth / effectiveSpeed);
    }, [logos.length, gap, speed]);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          '--logoloop-duration': `${duration}s`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
        }) as React.CSSProperties,
      [gap, logoHeight, duration, fadeOutColor]
    );

    const rootClassName = useMemo(
      () =>
        [
          'logoloop',
          direction === 'right' ? 'logoloop--reverse' : 'logoloop--horizontal',
          fadeOut && 'logoloop--fade',
          scaleOnHover && 'logoloop--scale-hover',
          (pauseOnHover || hoverSpeed === 0) && 'logoloop--pause-hover',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [direction, fadeOut, scaleOnHover, pauseOnHover, hoverSpeed, className]
    );

    const renderLogoItem = (item: LogoItem, key: string | number) => {
      if (renderItem) {
        return (
          <li className="logoloop__item" key={key} role="listitem">
            {renderItem(item, key)}
          </li>
        );
      }
      const isNodeItem = 'node' in item && Boolean(item.node);
      const content = isNodeItem ? (
        <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
          {item.node}
        </span>
      ) : (
        <img
          src={item.src}
          srcSet={item.srcSet}
          sizes={item.sizes}
          width={item.width}
          height={item.height}
          alt={item.alt ?? ''}
          title={item.title}
          loading="eager"
          decoding="async"
          draggable={false}
        />
      );
      const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);
      const itemContent = item.href ? (
        <a
          className="logoloop__link"
          href={item.href}
          aria-label={itemAriaLabel || 'logo link'}
          target="_blank"
          rel="noreferrer noopener"
        >
          {content}
        </a>
      ) : (
        content
      );
      return (
        <li className="logoloop__item" key={key} role="listitem">
          {itemContent}
        </li>
      );
    };

    return (
      <div
        className={rootClassName}
        style={{ width: toCssLength(width) ?? '100%', ...cssVariables, ...style }}
        role="region"
        aria-label={ariaLabel}
      >
        <div className="logoloop__track">
          <ul className="logoloop__list" role="list">
            {logos.map((item, idx) => renderLogoItem(item, `list1-${idx}`))}
          </ul>
          <ul className="logoloop__list" role="list" aria-hidden="true">
            {logos.map((item, idx) => renderLogoItem(item, `list2-${idx}`))}
          </ul>
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
